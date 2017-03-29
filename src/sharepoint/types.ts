// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx

/**
 * Represents the unique sequential location of a change within the change log.
 */
export interface ChangeToken {
    /**
     * Gets or sets a string value that contains the serialized representation of the change token generated by the protocol server.
     */
    StringValue: string;
}

/**
 * Defines a query that is performed against the change log.
 */
export interface ChangeQuery {
    /**
     * Gets or sets a value that specifies whether add changes are included in the query.
     */
    Add?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to alerts are included in the query.
     */
    Alert?: boolean;

    /**
     * Gets or sets a value that specifies the end date and end time for changes that are returned through the query.
     */
    ChangeTokenEnd?: ChangeToken;

    /**
     * Gets or sets a value that specifies the start date and start time for changes that are returned through the query.
     */
    ChangeTokenStart?: ChangeToken;

    /**
     * Gets or sets a value that specifies whether changes to content types are included in the query.
     */
    ContentType?: boolean;

    /**
     * Gets or sets a value that specifies whether deleted objects are included in the query.
     */
    DeleteObject?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to fields are included in the query.
     */
    Field?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to files are included in the query.
     */
    File?: boolean;

    /**
     * Gets or sets value that specifies whether changes to folders are included in the query.
     */
    Folder?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to groups are included in the query.
     */
    Group?: boolean;

    /**
     * Gets or sets a value that specifies whether adding users to groups is included in the query.
     */
    GroupMembershipAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether deleting users from the groups is included in the query.
     */
    GroupMembershipDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether general changes to list items are included in the query.
     */
    Item?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to lists are included in the query.
     */
    List?: boolean;

    /**
     * Gets or sets a value that specifies whether move changes are included in the query.
     */
    Move?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to the navigation structure of a site collection are included in the query.
     */
    Navigation?: boolean;

    /**
     * Gets or sets a value that specifies whether renaming changes are included in the query.
     */
    Rename?: boolean;

    /**
     * Gets or sets a value that specifies whether restoring items from the recycle bin or from backups is included in the query.
     */
    Restore?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleAssignmentAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleAssignmentDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionAdd?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionDelete?: boolean;

    /**
     * Gets or sets a value that specifies whether adding role assignments is included in the query.
     */
    RoleDefinitionUpdate?: boolean;

    /**
     * Gets or sets a value that specifies whether modifications to security policies are included in the query.
     */
    SecurityPolicy?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to site collections are included in the query.
     */
    Site?: boolean;

    /**
     * Gets or sets a value that specifies whether updates made using the item SystemUpdate method are included in the query.
     */
    SystemUpdate?: boolean;

    /**
     * Gets or sets a value that specifies whether update changes are included in the query.
     */
    Update?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to users are included in the query.
     */
    User?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to views are included in the query.
     */
    View?: boolean;

    /**
     * Gets or sets a value that specifies whether changes to Web sites are included in the query.
     */
    Web?: boolean;
}

/**
 * Specifies a Collaborative Application Markup Language (CAML) query on a list or joined lists.
 */
export interface CamlQuery {

    /**
     * Gets or sets a value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format.
     */
    DatesInUtc?: boolean;

    /**
     * Gets or sets a value that specifies the server relative URL of a list folder from which results will be returned.
     */
    FolderServerRelativeUrl?: string;

    /**
     * Gets or sets a value that specifies the information required to get the next page of data for the list view.
     */
    ListItemCollectionPosition?: ListItemCollectionPosition;

    /**
     * Gets or sets value that specifies the XML schema that defines the list view.
     */
    ViewXml?: string;
}

/**
 * Specifies the information required to get the next page of data for a list view.
 */
export interface ListItemCollectionPosition {
    /**
     * Gets or sets a value that specifies information, as name-value pairs, required to get the next page of data for a list view.
     */
    PagingInfo: string;
}

/**
 * Represents the input parameter of the GetListItemChangesSinceToken method.
 */
export interface ChangeLogitemQuery {
    /**
     * The change token for the request.
     */
    ChangeToken?: string;

    /**
     * The XML element that defines custom filtering for the query.
     */
    Contains?: string;

    /**
     * The records from the list to return and their return order.
     */
    Query?: string;

    /**
     * The options for modifying the query.
     */
    QueryOptions?: string;

    /**
     * RowLimit
     */
    RowLimit?: string;

    /**
     * The names of the fields to include in the query result.
     */
    ViewFields?: string;

    /**
     * The GUID of the view.
     */
    ViewName?: string;
}

/**
 * Determines the display mode of the given control or view
 */
export enum ControlMode {
    Display = 1,
    Edit = 2,
    New = 3,
}

/**
 * Represents properties of a list item field and its value.
 */
export interface ListItemFormUpdateValue {

    /**
     * The error message result after validating the value for the field.
     */
    ErrorMessage?: string;

    /**
     * The internal name of the field.
     */
    FieldName?: string;

    /**
     * The value of the field, in string format.
     */
    FieldValue?: string;

    /**
     * Indicates whether there was an error result after validating the value for the field.
     */
    HasException?: boolean;
}

/**
 * Specifies the type of the field.
 */
export enum FieldTypes {
    Invalid = 0,
    Integer = 1,
    Text = 2,
    Note = 3,
    DateTime = 4,
    Counter = 5,
    Choice = 6,
    Lookup = 7,
    Boolean = 8,
    Number = 9,
    Currency = 10,
    URL = 11,
    Computed = 12,
    Threading = 13,
    Guid = 14,
    MultiChoice = 15,
    GridChoice = 16,
    Calculated = 17,
    File = 18,
    Attachments = 19,
    User = 20,
    Recurrence = 21,
    CrossProjectLink = 22,
    ModStat = 23,
    Error = 24,
    ContentTypeId = 25,
    PageSeparator = 26,
    ThreadIndex = 27,
    WorkflowStatus = 28,
    AllDayEvent = 29,
    WorkflowEventType = 30,
}

export enum DateTimeFieldFormatType {
    DateOnly = 0,
    DateTime = 1,
}

/**
 * Specifies the control settings while adding a field.
 */
export enum AddFieldOptions {
    /**
     *  Specify that a new field added to the list must also be added to the default content type in the site collection
     */
    DefaultValue = 0,
    /**
     * Specify that a new field added to the list must also be added to the default content type in the site collection.
     */
    AddToDefaultContentType = 1,
    /**
     * Specify that a new field must not be added to any other content type
     */
    AddToNoContentType = 2,
    /**
     *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
     */
    AddToAllContentTypes = 4,
    /**
     * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
     */
    AddFieldInternalNameHint = 8,
    /**
     * Specify that a new field that is added to the specified list must also be added to the default list view
     */
    AddFieldToDefaultView = 16,
    /**
     * Specify to confirm that no other field has the same display name
     */
    AddFieldCheckDisplayName = 32,
}

export interface XmlSchemaFieldCreationInformation {
    Options?: AddFieldOptions;
    SchemaXml: string;
}

export enum CalendarType {
    Gregorian = 1,
    Japan = 3,
    Taiwan = 4,
    Korea = 5,
    Hijri = 6,
    Thai = 7,
    Hebrew = 8,
    GregorianMEFrench = 9,
    GregorianArabic = 10,
    GregorianXLITEnglish = 11,
    GregorianXLITFrench = 12,
    KoreaJapanLunar = 14,
    ChineseLunar = 15,
    SakaEra = 16,
    UmAlQura = 23,
}

export enum UrlFieldFormatType {
    Hyperlink = 0,
    Image = 1,
}

export interface BasePermissions {
    Low: number;
    High: number;
}

export enum PermissionKind {

    /**
     * Has no permissions on the Site. Not available through the user interface.
     */
    EmptyMask = 0,

    /**
     * View items in lists, documents in document libraries, and Web discussion comments.
     */
    ViewListItems = 1,

    /**
     * Add items to lists, documents to document libraries, and Web discussion comments.
     */
    AddListItems = 2,

    /**
     * Edit items in lists, edit documents in document libraries, edit Web discussion comments
     * in documents, and customize Web Part Pages in document libraries.
     */
    EditListItems = 3,

    /**
     * Delete items from a list, documents from a document library, and Web discussion
     * comments in documents.
     */
    DeleteListItems = 4,

    /**
     * Approve a minor version of a list item or document.
     */
    ApproveItems = 5,

    /**
     * View the source of documents with server-side file handlers.
     */
    OpenItems = 6,

    /**
     * View past versions of a list item or document.
     */
    ViewVersions = 7,

    /**
     * Delete past versions of a list item or document.
     */
    DeleteVersions = 8,

    /**
     * Discard or check in a document which is checked out to another user.
     */
    CancelCheckout = 9,

    /**
     * Create, change, and delete personal views of lists.
     */
    ManagePersonalViews = 10,

    /**
     * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
     */
    ManageLists = 12,

    /**
     * View forms, views, and application pages, and enumerate lists.
     */
    ViewFormPages = 13,

    /**
     * Make content of a list or document library retrieveable for anonymous users through SharePoint search.
     * The list permissions in the site do not change.
     */
    AnonymousSearchAccessList = 14,

    /**
     * Allow users to open a Site, list, or folder to access items inside that container.
     */
    Open = 17,

    /**
     * View pages in a Site.
     */
    ViewPages = 18,

    /**
     * Add, change, or delete HTML pages or Web Part Pages, and edit the Site using
     * a Windows SharePoint Services compatible editor.
     */
    AddAndCustomizePages = 19,

    /**
     * Apply a theme or borders to the entire Site.
     */
    ApplyThemeAndBorder = 20,

    /**
     * Apply a style sheet (.css file) to the Site.
     */
    ApplyStyleSheets = 21,

    /**
     * View reports on Site usage.
     */
    ViewUsageData = 22,

    /**
     * Create a Site using Self-Service Site Creation.
     */
    CreateSSCSite = 23,

    /**
     * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
     */
    ManageSubwebs = 24,

    /**
     * Create a group of users that can be used anywhere within the site collection.
     */
    CreateGroups = 25,

    /**
     * Create and change permission levels on the Site and assign permissions to users
     * and groups.
     */
    ManagePermissions = 26,

    /**
     * Enumerate files and folders in a Site using Microsoft Office SharePoint Designer
     * and WebDAV interfaces.
     */
    BrowseDirectories = 27,

    /**
     * View information about users of the Site.
     */
    BrowseUserInfo = 28,

    /**
     * Add or remove personal Web Parts on a Web Part Page.
     */
    AddDelPrivateWebParts = 29,

    /**
     * Update Web Parts to display personalized information.
     */
    UpdatePersonalWebParts = 30,

    /**
     * Grant the ability to perform all administration tasks for the Site as well as
     * manage content, activate, deactivate, or edit properties of Site scoped Features
     * through the object model or through the user interface (UI). When granted on the
     * root Site of a Site Collection, activate, deactivate, or edit properties of
     * site collection scoped Features through the object model. To browse to the Site
     * Collection Features page and activate or deactivate Site Collection scoped Features
     * through the UI, you must be a Site Collection administrator.
     */
    ManageWeb = 31,

    /**
     * Content of lists and document libraries in the Web site will be retrieveable for anonymous users through
     * SharePoint search if the list or document library has AnonymousSearchAccessList set.
     */
    AnonymousSearchAccessWebLists = 32,

    /**
     * Use features that launch client applications. Otherwise, users must work on documents
     * locally and upload changes.
     */
    UseClientIntegration = 37,

    /**
     * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer interfaces to access the Site.
     */
    UseRemoteAPIs = 38,

    /**
     * Manage alerts for all users of the Site.
     */
    ManageAlerts = 39,

    /**
     * Create e-mail alerts.
     */
    CreateAlerts = 40,

    /**
     * Allows a user to change his or her user information, such as adding a picture.
     */
    EditMyUserInfo = 41,

    /**
     * Enumerate permissions on Site, list, folder, document, or list item.
     */
    EnumeratePermissions = 63,

    /**
     * Has all permissions on the Site. Not available through the user interface.
     */
    FullMask = 65,
}

export interface FollowedContent {
    FollowedDocumentsUrl: string;
    FollowedSitesUrl: string;
}

export interface UserProfile {
    /**
     * An object containing the user's FollowedDocumentsUrl and FollowedSitesUrl.
     */
    FollowedContent?: FollowedContent;
    /**
     * The account name of the user. (SharePoint Online only)
     */
    AccountName?: string;
    /**
     * The display name of the user. (SharePoint Online only)
     */
    DisplayName?: string;
    /**
     * The FirstRun flag of the user. (SharePoint Online only)
     */
    O15FirstRunExperience?: number;
    /**
     * The personal site of the user.
     */
    PersonalSite?: string;
    /**
     * The capabilities of the user's personal site. Represents a bitwise PersonalSiteCapabilities value:
     * None = 0; Profile Value = 1; Social Value = 2; Storage Value = 4; MyTasksDashboard Value = 8; Education Value = 16; Guest Value = 32.
     */
    PersonalSiteCapabilities?: number;
    /**
     * The error thrown when the user's personal site was first created, if any. (SharePoint Online only)
     */
    PersonalSiteFirstCreationError?: string;
    /**
     * The date and time when the user's personal site was first created. (SharePoint Online only)
     */
    PersonalSiteFirstCreationTime?: Date;
    /**
     * The status for the state of the personal site instantiation
     */
    PersonalSiteInstantiationState?: number;
    /**
     * The date and time when the user's personal site was last created. (SharePoint Online only)
     */
    PersonalSiteLastCreationTime?: Date;
    /**
     * The number of attempts made to create the user's personal site. (SharePoint Online only)
     */
    PersonalSiteNumberOfRetries?: number;
    /**
     * Indicates whether the user's picture is imported from Exchange.
     */
    PictureImportEnabled?: boolean;
    /**
     * The public URL of the personal site of the current user. (SharePoint Online only)
     */
    PublicUrl?: string;
    /**
     * The URL used to create the user's personal site.
     */
    UrlToCreatePersonalSite?: string;
}

export interface HashTag {
    /**
     * The hash tag's internal name.
     */
    Name?: string;
    /**
     * The number of times that the hash tag is used.
     */
    UseCount?: number;
}

export interface HashTagCollection {
    Items: HashTag[];
}

export interface UserIdInfo {
    NameId?: string;
    NameIdIssuer?: string;
}

export enum PrincipalType {
    None = 0,
    User = 1,
    DistributionList = 2,
    SecurityGroup = 4,
    SharePointGroup = 8,
    All = 15,
}

export interface DocumentLibraryInformation {
    AbsoluteUrl?: string;
    Modified?: Date;
    ModifiedFriendlyDisplay?: string;
    ServerRelativeUrl?: string;
    Title?: string;
}

export interface ContextInfo {
    FormDigestTimeoutSeconds?: number;
    FormDigestValue?: number;
    LibraryVersion?: string;
    SiteFullUrl?: string;
    SupportedSchemaVersions?: string[];
    WebFullUrl?: string;
}

export interface RenderListData {
    Row: any[];
    FirstRow: number;
    FolderPermissions: string;
    LastRow: number;
    FilterLink: string;
    ForceNoHierarchy: string;
    HierarchyHasIndention: string;
}

export enum PageType {
    Invalid = -1,
    DefaultView,
    NormalView,
    DialogView,
    View,
    DisplayForm,
    DisplayFormDialog,
    EditForm,
    EditFormDialog,
    NewForm,
    NewFormDialog,
    SolutionForm,
    PAGE_MAXITEMS,
}

export interface ListFormData {
    ContentType?: string;
    Title?: string;
    Author?: string;
    Editor?: string;
    Created?: Date;
    Modified: Date;
    Attachments?: any;
    ListSchema?: any;
    FormControlMode?: number;
    FieldControlModes?: {
        Title?: number,
        Author?: number,
        Editor?: number,
        Created?: number,
        Modified?: number,
        Attachments?: number,
    };
    WebAttributes?: {
        WebUrl?: string,
        EffectivePresenceEnabled?: boolean,
        AllowScriptableWebParts?: boolean,
        PermissionCustomizePages?: boolean,
        LCID?: number,
        CurrentUserId?: number,
    };
    ItemAttributes?: {
        Id?: number,
        FsObjType?: number,
        ExternalListItem?: boolean,
        Url?: string,
        EffectiveBasePermissionsLow?: number,
        EffectiveBasePermissionsHigh?: number,
    };
    ListAttributes?: {
        Id?: string,
        BaseType?: number,
        Direction?: string,
        ListTemplateType?: number,
        DefaultItemOpen?: number,
        EnableVersioning?: boolean,
    };
    CSRCustomLayout?: boolean;
    PostBackRequired?: boolean;
    PreviousPostBackHandled?: boolean;
    UploadMode?: boolean;
    SubmitButtonID?: string;
    ItemContentTypeName?: string;
    ItemContentTypeId?: string;
    JSLinks?: string;
}