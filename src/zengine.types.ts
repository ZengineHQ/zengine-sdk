export interface ZenginePluginView {
  type: string,
  location?: string,
  src: string,
  defaultDimensions?: {
    width: number | string
    height: number | string
  }
}

export interface ZenginePermissions {
  create: boolean | null
  read: boolean | null
  update: boolean | null
  delete: boolean | null
}

export interface ZengineUser {
  id: number
  resource: any | null
  resourceId: any | null
  role: { id: number } | null
  permissions?: ZenginePermissions
  username: string
  email: string
  displayName: string
  created: string
  modified: string
  authProvider?: {
    id: number
  }
  profile: {
    firstName: string | null
    lastName: string | null
    publicName: string | null
    publicUrl: string | null
    address1: string | null
    address2: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    phone: {
      work: string | null
      mobile: string | null
      home: string | null
    }
    fax: string | null
    notes: string | null
  }
  billing?: {
    plan: any
    expirationDate: string
    status: any
  }
  settings: {
    avatarUrl: string
    timezone: string
    dateFormat: string
    threading: boolean
    isTourOff: boolean
    isNewRecordNoticeDisabled: boolean
  }
  metadata: {
    lastLogin: string
    isTourViewed: boolean
    recentlyVisitedWorkspaceIds: string
  }
}

export interface ZengineFormGroup {
  created: string
  createdByUser: ZengineUser
  description: string | null
  /**
   * List of Form IDs
   * access property `fullForms` for complete form data
   */
  forms: { id: number }[]
  fullForms: ZengineForm[]
  id: 1
  isDefault: boolean
  modified: string
  name: string
  workspace: {
    id: number
  }
}

export interface ZengineRole {
  created: string
  id: number
  modified: string
  name: string
}

export interface ZengineMember {
  created: string
  id: number
  modified: string
  role: {
    id: number
  }
  user: {
    displayName: string
    email: string
    id: number
    username: string
  }
}

export interface ZengineWorkspace {
  reated: string
  description: string | null
  formGroups: ZengineFormGroup[] | null
  forms: ZengineForm[]
  id: number
  isAdmin: boolean
  isCustomRole: boolean
  isOwner: boolean
  logoPath: string
  memberId: number
  members: ZengineMember[]
  metadata: {
    lastActivity: string
  }
  name: string
  roles: ZengineRole[]
  settings: {
    logoUrl: string | null
  }
  taskLists?: {
    created: string
    createdByUser: {
      id: number
    }
    id: number
    modified: string
    name: string
    order: number
  }[]
  _formGroupsFullyPopulated: boolean
}

export interface ZengineState {
  id: string
  abbreviation: string
  state: string
  country: ZengineCountry
}

export interface ZengineCountry {
  id: string
  country?: string
}

export interface ZengineDataView {
  columnWidths: {
    [key: string]: number
  }
  created: string
  createdByUser: {
    id: number
  }
  fields: string[]
  filter: ZengineFilter
  groupByFields: any
  id: number
  isDefault: boolean
  modified: string
  name: string
  order: number
  sortByFields: string[]
}

export interface ZengineFilter {
  and?: ZengineFilter[]
  or?: ZengineFilter[]
  prefix?: '' | 'not' | 'min' | 'max' | 'not-contains' | 'contains' | 'starts-with' | 'ends-with' | 'not-validates'
  attribute?: string
  value?: any
}

export interface ZengineForm {
  canCreateRecords: boolean
  created: string
  createdByUser: ZengineUser
  dataViews: ZengineDataView[]
  end: string
  fields: ZengineField[]
  folders: ZengineFolder[]
  id: number
  isPublic: boolean
  linkedForms: {
    form: {
      id: number
    }
    keyField: {
      id: number
    }
    type: 'hasMany' | 'hasOne' | 'belongsTo'
  }[]
  modified: string
  name: string
  objectVersion: string
  order: number
  permissions: ZenginePermissions
  previewSlug: string
  purpose: string | null
  settings: {
    captcha: boolean
    confirmation: {
      emailAddress: string | null
      emailName: string | null
    }
    fieldIdMaps: {
      email: string | null
      recordName: string
    }
    layout: {
      css: any | null
      footer: any | null
      header: any | null
    }
    newRecordFolderId: number
    pendingRecordFolderId: number | null
    returnUrl: string | null
    style: {
      error: {
        backgroundColor: string
        bold: boolean
        color: string
        fontFace: string
        italic: boolean
        size: number
        underline: boolean
      }
      font: {
        bold: boolean
        color: string
        fontFace: string
        italic: boolean
        size: number
        underline: boolean
      }
      formWidth: string
      heading: {
        bold: boolean
        color: string
        fontFace: string
        italic: boolean
        size: number
        underline: boolean
      }
      label: {
        columnWidth: string
      }
      row: {
        verticalSpacing: string
      }
      success: {
        bold: boolean
        color: string
        fontFace: string
        italic: boolean
        size: number
        underline: boolean
      }
    }
    terminology: {
      closedError: string
      confirmReplaceFile: string
      continue: string
      email: string
      invalidAlphaError: string
      invalidAlphaNumError: string
      invalidChoiceError: string
      invalidCurrencyDollarError: string
      invalidDateError: string
      invalidEmailError: string
      invalidExtensionsError: string
      invalidMultipleValuesError: string
      invalidNumberError: string
      invalidPostalError: string
      invalidSelectionError: string
      invalidUploadValue: string
      maxLengthError: string
      maxNumberError: string
      maxUploadSize: number | null
      maxWordsError: string
      minNumberError: string
      minWords: string
      minWordsError: string
      next: string
      oneRequiredError: string
      previous: string
      recordValidationError: string
      requiredFieldError: string
      submissionComplete: string
      submissionCompleteEmailBody: string | null
      submissionCompleteEmailSubject: string | null
      submissionExistsError: string
      submit: string
      uniqueFieldError: string
      upload: string
      uploadComplete: string
      uploadError: string
    }
  }
  singularName: string
  slug: string
  start: string
  workspace: {
    id: string | number
  }
}

export interface ZengineFolder {
  created: string
  id: number
  modified: string
  name: string
  order: number
}

export interface ZengineField {
  control: boolean
  description: string | null
  id: number
  label: string
  locked: boolean
  name: string | null
  order: number
  purpose: string | null
  rules: ZengineRule[] | null
  settings: {
    properties: {
      aggregation: null
      calculation: null
      choices: null
      class: null
      cols: null
      currency: null
      decimal: null
      displayFields: null
      extensions: null
      filter: null
      height: null
      hidden: null
      linkedForm: null
      markdown: boolean
      maxNumber: null
      maxlength: null
      maxwordcount: null
      minNumber: null
      minwordcount: null
      multiple: boolean
      onBlur: null
      onChange: null
      onFocus: null
      placeholder: null
      provinces: boolean
      rows: null
      showAllChoices: boolean
      size: null
      summarizedForm: null
      uploadsize: null
      width: null
    }
    validation: {
      alpha: boolean
      alphaNumeric: boolean
      currencyDollar: boolean
      emailAddress: boolean
      numeric: boolean
      required: boolean
      unique: boolean
      zipCode: boolean
    }
  }
  type: string
}

export interface ZengineRule {
  show: {
    filter: ZengineFilter
  }
}

export interface ZengineActivity {
  action: 'create' | 'read' | 'update' | 'delete'
  changes: {
    from: {
      /**
       * A field ID and it's value
       * ex: field123: 'hello world'
       */
      [key: string]: any
    }
    to: {
      /**
       * A field ID and it's value
       * ex: field123: 'hello world'
       */
      [key: string]: any
    }
  } | null
  created: string
  createdByClient: {
    id: number
  }
  createdByUser: {
    id: number
  }
  id: number
  modified: string
  record: {
    id: number
  }
  resource: 'files' | 'tasks' | 'events' | 'records' | 'notes' | 'replies' | 'invitees' | 'members' | 'jobs' | 'binary_export_jobs' | 'record_import_jobs' | 'record_export_jobs'
  resourceId: number
}

export type ZengineLinkedFieldValue = {
  id: number | null
  name: string | null
}

export type ZengineFieldValue = string | number | boolean | null | ZengineLinkedFieldValue

export interface ZengineRecordMetadata {
  activities: ZengineActivity[]
  canDelete: boolean
  canUpdate: boolean
  created: string
  createdByClient: {
    id: number
    appName: string
  }
  createdByUser: ZengineUser
  events: any | null
  // [key: string]: ZengineFieldValue
  folder: ZengineFolder
  form: ZengineForm
  id: number
  isComplete: boolean
  isValid: boolean
  metadata: {
    ipAddress: string | null
  }
  modified: string
  name: string
  notes: any | null
  objectVersion: string
  tasks: any | null
  workspace: {
    id: number
  }
}

export interface ZengineRecordFields {

  [key: string]: ZengineFieldValue
}

export type ZengineRecord = ZengineRecordFields & ZengineRecordMetadata

export interface ZengineContextData {
  constants: {
    apiUrl: string
    serviceUrl: string
    supportUrl: string
  },
  plugin: {
    id: number
    name: string
    namespace: string
    /**
     * defined in plugin.json, not API
     */
    icon: string
    /**
     * defined in plugin.json, not API
     */
    views: ZenginePluginView[]
    firebaseAuthToken: string
    firebaseUrl: string
  }
  pluginView: ZenginePluginView
  seedData?: any
  user: ZengineUser
  workspace: ZengineWorkspace
  record: ZengineRecord | null
  form: ZengineForm | null
  dataView: ZengineDataView | null
  filter: ZengineFilter | null
  states: ZengineState[]
  countries: ZengineCountry[]
  location: {
    protocol: string
    host: string
    port: number
    hash: string
    href: string
    pathname: string
    searchParams: { [key: string]: string | number }
    pathParams: { [key: string]: string }
  }
}
