import { Queryable, QueryableCollection, QueryableInstance } from "./queryable";
import { Files } from "./files";
import { TypedHash } from "../collections/collections";
import { Util } from "../utils/util";

/**
 * Describes a collection of Folder objects
 *
 */
export class Folders extends QueryableCollection {

    /**
     * Creates a new instance of the Folders class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     */
    constructor(baseUrl: string | Queryable, path = "folders") {
        super(baseUrl, path);
    }

    /**
     * Gets a folder by folder name
     *
     */
    public getByName(name: string): Folder {
        const f = new Folder(this);
        f.concat(`('${name}')`);
        return f;
    }

    /**
     * Adds a new folder to the current folder (relative) or any folder (absolute)
     *
     * @param url The relative or absolute url where the new folder will be created. Urls starting with a forward slash are absolute.
     * @returns The new Folder and the raw response.
     */
    public add(url: string): Promise<FolderAddResult> {

        return this.clone(Folders, `add('${url}')`, true).post().then((response) => {
            return {
                data: response,
                folder: this.getByName(url),
            };
        });
    }
}

/**
 * Describes a single Folder instance
 *
 */
export class Folder extends QueryableInstance {


    //
    // TODO:
    //      Properties (https://msdn.microsoft.com/en-us/library/office/dn450841.aspx#bk_FolderProperties)
    //          UniqueContentTypeOrder (setter)
    //

    /**
     * Creates a new instance of the Folder class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     * @param path Optional, if supplied will be appended to the supplied baseUrl
     */
    constructor(baseUrl: string | Queryable, path?: string) {
        super(baseUrl, path);
    }

    /**
     * Specifies the sequence in which content types are displayed.
     *
     */
    public get contentTypeOrder(): QueryableCollection {
        return new QueryableCollection(this, "contentTypeOrder");
    }

    /**
     * Gets this folder's files
     *
     */
    public get files(): Files {
        return new Files(this);
    }

    /**
     * Gets this folder's sub folders
     *
     */
    public get folders(): Folders {
        return new Folders(this);
    }

    /**
     * Gets this folder's list item field values
     *
     */
    public get listItemAllFields(): QueryableCollection {
        return new QueryableCollection(this, "listItemAllFields");
    }

    /**
     * Gets the parent folder, if available
     *
     */
    public get parentFolder(): Folder {
        return new Folder(this, "parentFolder");
    }

    /**
     * Gets this folder's properties
     *
     */
    public get properties(): QueryableInstance {
        return new QueryableInstance(this, "properties");
    }

    /**
     * Gets this folder's server relative url
     *
     */
    public get serverRelativeUrl(): Queryable {
        return new Queryable(this, "serverRelativeUrl");
    }

    /**
     * Gets a value that specifies the content type order.
     *
     */
    public get uniqueContentTypeOrder(): QueryableCollection {
        return new QueryableCollection(this, "uniqueContentTypeOrder");
    }

    public update(properties: TypedHash<string | number | boolean>): Promise<FolderUpdateResult> {
        const postBody: string = JSON.stringify(Util.extend({
            "__metadata": { "type": "SP.Folder" },
        }, properties));

        return this.post({
            body: postBody,
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then((data) => {
            return {
                data: data,
                folder: this,
            };
        });
    }

    /**
    * Delete this folder
    *
    * @param eTag Value used in the IF-Match header, by default "*"
    */
    public delete(eTag = "*"): Promise<void> {
        return this.clone(Folder, null, true).post({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    }

    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    public recycle(): Promise<string> {
        return this.clone(Folder, "recycle", true).post();
    }
}

export interface FolderAddResult {
    folder: Folder;
    data: any;
}

export interface FolderUpdateResult {
    folder: Folder;
    data: any;
}