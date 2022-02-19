export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
            list: [
                {value: "work", title: "Work"},
                {value: "volunteer", title: "Volunteer"},
                {value: "education", title: "Education"},
            ],
        },
      },
      {
        name: 'date',
        title: 'Date',
        type: 'string',
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string',
      },
      {
        name: 'size',
        title: 'Size',
        type: 'string',
        options: {
            list: [
                {value: "big", title: "Big"},
                {value: "medium", title: "Medium"},
                {value: "small", title: "Small"},
            ],
        },
      },
    ],
  }
  