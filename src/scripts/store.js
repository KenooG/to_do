const state = {
    tasks: [
        {
            id: 1,
            name: 'czesc',
            status: false,
        },
        {
            id: 2,
            name: 'task3',
            status: true,
        },
       {
          id: 3,
          name: 'task3',
          status: true,
       },

    ],
    filters: [
        {
            name: 'All',
            isActive: true,
        },
        {
            name: 'Active',
            isActive: false,
        },
        {
            name: 'Completed',
            isActive: false,
        },

    ]
}



export default state