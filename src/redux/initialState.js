const initialState = {
  board: {
    name: "Personal",
    contents: [
      {
        id: 1628674142088,
        color: "#7dfbff",
        position: { x: 35, y: 197 },
        title: "Drag Me!",
        body: 'Figure out what\'s important',
      },
      {
        id: 1628674173378,
        color: "#9999FF",
        position: { x: 34, y: 328},
        title: "Create Me!",
        body: 'Right click on the board to begin'
      },
      {
        id: 1628674191680,
        color: "#d1ffee",
        position: { x: 33, y: 462 },
        title: 'Edit Me! Delete Me! ',
        body: 'Right Click on the Card'
      },
      {
        id: 1628674368383,
        color: "#9999FF",
        position: { x: 182, y: 53 },
        title: "Personal Kanban",
        body: 'Version 0.13'
      },
      {
        id: 1628674456874,
        color: "#FF315C",
        position: { x: 335, y: 192 },
        title: 'Depend on Me?',
        body: 'Development ongoing... But I use it.'
      }
    ]
  },
  activeBoard: 90210,
  version: 0.2,
  boards: {
    90210: {
      id: 90210,
      title: "Personal",
      cards: {
        1628674456874: {
          id: 1628674456874,
          position: { x: 335, y: 192 }
        },
        1628674368383: {
          id: 1628674368383,
          position: { x: 182, y: 53 }
        },
        1628674191680: {
          id: 1628674191680,
          position: { x: 33, y: 462 }
        },
        1628674173378: {
          id: 1628674173378,
          position: { x: 34, y: 328}
        },
        1628674142088: {
          id: 1628674142088,
          position: { x: 35, y: 197 }
        }
      }
    },
    90211: {
      id: 90211,
      title: "Professional",
      cards: {}
    },
    90212: {
      id: 90212,
      title: "Project",
      cards: {}
    }

  },
  cards: {
    1628674456874: {
      id: 1628674456874,
      board_id: 90210,
      title: 'Depend on Me?',
      color: "#FF315C",
      body: 'Development ongoing... But I use it.',
      status: {
        editing: false,
        complete: false,
        discarded: false
      }
    },
    1628674368383: {
      id: 1628674368383,
      board_id: 90210,
      title: "Personal Kanban",
      color: "#9999FF",
      body: 'Version 0.20',
      status: {
        editing: false,
        complete: false,
        discarded: false
      }
    },

    1628674191680: {
      id: 1628674191680,
      board_id: 90210,
      title: 'Edit Me! Delete Me!',
      color: "#d1ffee",
      body: 'Right Click on the Card',
      status: {
        editing: true,
        complete: false,
        discarded: false
      }
    },
    1628674173378: {
      id: 1628674173378,
      board_id: 90210,
      title: "Create Me!",
      color: "#9999FF",
      body: 'Right click on the board to begin',
      status: {
        editing: false,
        complete: false,
        discarded: false
      }
    },
    1628674142088: {
      id: 1628674142088,
      board_id: 90210,
      title: "Drag Me!",
      color: "#7dfbff",
      body: 'Figure out what\'s important',
      status: {
        editing: false,
        complete: false,
        discarded: false
      }
    }
  },
  comments: {

  }


}

const v3State = {
  boards: {
    90210: {
      id: 90210,
      title: "Personal",
      cards: {
        1628674456874: {
          id: 1628674456874,
          position: { x: 335, y: 192 }
        },
        1628674368383: {
          id: 1628674368383,
          position: { x: 182, y: 53 }
        },
        1628674191680: {
          id: 1628674191680,
          position: { x: 33, y: 462 }
        },
        1628674173378: {
          id: 1628674173378,
          position: { x: 34, y: 328}
        },
        1628674142088: {
          id: 1628674142088,
          position: { x: 35, y: 197 }
        }
      }
    },
    90211: {
      id: 90211,
      title: "Professional",
      cards: {}
    },
    90212: {
      id: 90212,
      title: "Project",
      cards: {}
    }

  },
  cards: {
    1628674456874: {
      id: 1628674456874,
      board_id: 90210,
      title: 'Depend on Me?',
      body: 'Development ongoing... But I use it.',
      status: 'active'
    },
    1628674368383: {
      id: 1628674368383,
      board_id: 90210,
      title: "Personal Kanban",
      body: 'Version 0.20',
      status: 'active'
    },
    1628674191680: {
      id: 1628674191680,
      board_id: 90210,
      title: 'Edit Me! Delete Me!',
      body: 'Right Click on the Card',
      status: 'active'
    },
    1628674173378: {
      id: 1628674173378,
      board_id: 90210,
      title: "Create Me!",
      body: 'Right click on the board to begin',
      status: 'active'
    },
    1628674142088: {
      id: 1628674142088,
      board_id: 90210,
      title: "Drag Me!",
      body: 'Figure out what\'s important',
      status: 'active'
    }
  },
  comments: {

  }

}

export { v3State };
export default initialState;
