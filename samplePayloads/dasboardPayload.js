import {icon} from '@fortawesome/fontawesome-svg-core';

export const DASHBOARD_PAYLOAD = [
  // {
  //   id: 0,
  //   viewType: 'horizontalFlatList',
  //   isTopCategoryNavigation: true,

  //   visibility: true,
  //   content: [
  //     {
  //       title: 'Men',
  //       redirection: 'Info about where to redirect(click)',
  //       icon: `<svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M48.488 15.598c-.309.271-.902.782-1.793-.144c-.889-.925-.34-1.521.068-2.003c.166-.197.425-.429.425-.902c0-.434-.874-.831-.469-.487c0 0 .519.237-.148 1.226c-.468-.243-1.208-.104-1.208-.104c.605.051.944.209 1.082.29c-.341.456-.728 1.002-.281 1.657c.491.722 1.111 1.455 2.133.865c1.022-.589.725-.867.191-.398" fill="#000000"></path><path d="M49.457 12.458c.484-.523.917-1.144.954-1.721a1.324 1.324 0 0 0-.354-.997c-.172-.183-.699-.74-1.483-.74c-.537 0-1.035.258-1.482.766c-.136.154-.389.414-.746.774a1.65 1.65 0 0 0-.342-.037c-.824 0-1.26.605-1.424.833l-.035.047c-.226.291-.428.808-.585 1.278c-.019-.075-.04-.146-.058-.222c0 0-1.707 1.41-2.902 2.674c0 0 .049.251.18.609c-1.377 1.593-2.974 2.732-4.433 3.54c.355-.831.544-1.871.544-3.175c0-2.71-.291-4.561-.902-5.839C42.492 8.836 38.961 2 38.961 2c-4.336 1.922-8.472.207-13.168.799c-9.313 1.175-7.273 5.56-7.273 5.56c-1.764 1.94-1.281 4.355.936 7.031c.46.556.803 1.205 1.063 1.881c.084.419.211.812.371 1.184c.246.992.349 1.971.384 2.753c-7.052 5.479-8.318 7.716-7.914 11.527a3.126 3.126 0 0 0-.358.367s.285 1.215.368 2.4c-.293.918-.634 2.951 1.002 5.15c.556.748 1.676 1.23 2.854 1.23c.596 0 1.184-.119 1.749-.35c.456-.188 1.083-.516 1.266-1.195c.196-.729-.249-1.287-.606-1.736a8.204 8.204 0 0 1-.162-.207c.282-.414.484-.961.189-1.6a2.377 2.377 0 0 0-.527-.707c-.133-.705-.264-1.955.223-2.986c0 0-.096-.214-.411-.462c.498-1.455 1.653-3.242 4.33-4.619c-.063 1.502-.405 5.099-2.12 10.218l-.081.244l.156.207c.034.043.444.566 1.374 1.086c-.346 1.195-.444 2.932.176 5.438c.816 3.297-.842 9.219-3.856 13.771l-.343.518l.592.221c.036.014.461.164 1.14.326c-.086.547-.036 1.23.434 1.951h2.942v-1.133S24.183 62 28.677 62c1.555 0 1.718-1.473.082-1.559c-.579-.031-.92-.195-1.192-.471c.27-.076.538-.152.799-.246l.499-.182l-.203-.48c-.012-.029-1.228-3.035.965-8.734c.338-.881.236-1.715.119-2.682c-.143-1.156-.313-2.561.305-4.529c.799 1.021 2.578 2.996 6.422 6.342c-.237 1.225-1.021 6.014.303 9.953l.07.211l.21.09c.05.021.319.123.936.225c-.115.562-.09 1.292.41 2.062h2.945v-1.133S41.836 62 46.331 62c1.555 0 1.719-1.473.082-1.559c-.584-.031-.924-.205-1.196-.486c.798-.104 1.212-.207 1.245-.217l.891-.23l-.67-.617c-.029-.027-2.941-2.779-4.505-10.789c-.261-1.332-1.308-2.383-2.633-3.715c-1.142-1.148-2.515-2.545-3.669-4.465c3.232-.131 4.996-.523 5.197-1.18l.049-.162l-.061-.156c-2.506-6.476-2.707-12.91-2.719-14.377c2.238-1.034 4.639-2.83 6.322-4.209c.086.039.168.082.26.116c0 0 1.878-.975 2.945-2.131l-.017-.01l.185-.112C50.527 16.177 51 15.517 51 14.833c0-.891-.787-1.752-1.543-2.375m-27.081.536c1.44.937 2.341 4.827 2.341 4.827c.98-.536.795-1.337.795-1.337c-1.273-2.865-1.754-7.088-1.754-7.088c4.273-.539 4.391 1.91 11.607 1.028c.654 1.128.899 2.894.899 5.663c0 4.381-2.212 5.223-6.567 5.302c-1.637.031-3.71-.129-5.377-.902c-.121-2.042-1.395-3.952-1.395-3.952s-.54.205-1.267-1.01c-.728-1.213-.722-3.466.718-2.531m9.177 13.73s-.489-2.395-2.023-4.333l.188-.001a21.291 21.291 0 0 0 2.043-.128c-.454 2.011-.208 4.462-.208 4.462m.017.49c2.195 5.285-.832 10.505-.832 10.505c2.177-5.808.832-10.505.832-10.505M18.574 40.611a3.546 3.546 0 0 1-1.349.271c-.932 0-1.702-.385-2.023-.816c-1.148-1.545-1.137-2.971-.97-3.818c.731-.133 1.909-.221 3.393.02c.243.119.745.404 1.006.789c.127.322-.284.844-.528.613c-.377-.354-.879-.814-.879-.814c.643.656.991 1.457.991 1.457c.558 1.162 1.828 1.695.359 2.298m3.649-2.338c2.26-6.865 2.096-10.912 2.088-11.083l-.035-.736l-.689.304c-3.416 1.506-4.918 3.645-5.565 5.419a4.53 4.53 0 0 0-.797-.188l-.718 2.847l-.682-2.779s-.698-.191-1.516.096c-.213-2.969.994-4.964 6.97-9.671c-.009.236-.021.38-.021.38c2.604.414 2.919-.57 3.017-1.313c.785.316 1.622.523 2.459.652l.188.093c.045.098.078.196.121.294l-1.777.724s.988.161 2.361.78c2.518 7.404-.053 14.267-.679 15.743c-2.893-.077-4.279-1.132-4.725-1.562m16.586 6.809c1.206 1.213 2.159 2.17 2.361 3.207c1.209 6.191 3.188 9.357 4.191 10.635c-.754.109-2.016.238-3.775.238c-2.366 0-3.498-.203-3.918-.307c-1.286-4.16-.148-9.42-.137-9.473l.063-.285l-.223-.193c-6.033-5.23-6.995-7.086-7.002-7.098l-.499-1.074l-.446 1.098c-1.098 2.697-.878 4.492-.701 5.936c.105.869.189 1.559-.063 2.213c-1.847 4.803-1.413 7.822-1.114 8.961a12.28 12.28 0 0 1-3.649.533c-1.641 0-3.01-.297-3.754-.5c2.969-4.742 4.49-10.537 3.635-13.994c-.549-2.219-.488-3.738-.228-4.766c.919.352 2.142.627 3.734.627h.325l.139-.287c.046-.092.34-.715.689-1.732l4.491.221c-.051.107-.09.182-.093.188l-.426.744h.873c.508 0 .976-.006 1.435-.016c1.267 2.269 2.819 3.845 4.092 5.124m4.929-25.801c-1.701 1.375-4.031 3.085-6.115 3.988l-.299.129l-.007.317c-.001.073-.12 7.234 2.608 14.592c-1.257-.289-3.462.213-4.987.646a54.51 54.51 0 0 1-.854.014c.757-1.85 2.247-7.064-.379-15.375c.968-.971 1.832-1.472 1.832-1.472c-.495-.513-1.532-.327-1.745-.281c.563-.186 1.07-.426 1.506-.742c1.846-.766 4.297-2.111 6.375-4.391c.125.193.264.387.436.573l2.537-1.277l-1.855 2.324c0 .001.336.482.947.955m3.754-2.427c-1.285-.801-2.26-1.954-2.734-3.303c0 0 .339-1.22.605-1.563c.125-.16.302-.485.641-.485c.153 0 .34.066.569.244c.7-.698 1.097-1.102 1.298-1.33c.247-.281.475-.417.703-.417c.233 0 .469.143.727.417c.512.541-1.43 2.14-1.43 2.14s2.102 1.328 2.102 2.276c0 .436-1.496 1.418-2.481 2.021" fill="#000000"></path><ellipse cx="27.239" cy="13.425" rx="1.489" ry="1.451" fill="#000000"></ellipse><ellipse cx="34.526" cy="13.425" rx="1.491" ry="1.451" fill="#000000"></ellipse><path d="M28.275 18.165c.465.829 1.404 1.569 2.604 1.569c1.203 0 2.145-.74 2.609-1.569c.125-.223-.042-.463-.226-.325c-1.532 1.162-3.237 1.154-4.763 0c-.184-.138-.349.102-.224.325" fill="#000000"></path></g></svg>`,
  //     },
  //     {
  //       title: 'Woman',
  //       redirection: 'Info about where to redirect(click)',
  //       icon: `<svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M57.106 34.982c-.205-.82-.4-1.335-.4-1.335c-.908 4.772-6.26 6.606-11.969 6.606c-6.936 0-14.398-2.704-15.074-6.13c1.074-1.095 1.57-2.148 1.324-3.45l5.787 3.277l-.082.142a1.429 1.429 0 0 0-.148 1.09c.098.374.336.687.674.883l.609.35c.389.226.859.254 1.266.088c.477.202.896.288 1.27.288c1.049-.001 1.709-.683 2.111-1.376c.738-1.292.412-2.506-.875-3.25c-1.402-.81-2.205-1.269-2.893-.931l-4.557-2.927c.416-.003.82 0 1.252-.012c7.771-.213 21.428-4.827 18.834-14.818c-4.988 7.003-14.125 4.536-16.844-3.085c-4.203-11.782-23.267-11.437-24.29 2.807c-.125 1.73-1.23 8.195 6.641 12.355l-4.473.543l-3.945-3.937c.09-.198.135-.416.127-.641A1.429 1.429 0 0 0 11 20.515l-.514-.483a1.45 1.45 0 0 0-1.211-.376c-1.592-1.167-2.793-.506-3.531.274c-.633.662-.754 1.296-.742 1.712c.014.594.295 1.152.836 1.66c1.164 1.1 1.828 1.729 2.572 1.578l5.58 5.556l5.164-.378c-1.338 3.498 1.438 4.698 1.438 4.698c1.646 3.204-.566 6.438 2.229 14.756c.146.605.332 1.345.426 1.627c.975 3.015 1.588 6.584 1.59 6.584c.008.155.031.301.066.438v.007a.896.896 0 0 0 .02.069c.037.184.086.374.156.579c.172.49.195 1.111-.145 1.375c-2.143 1.652 3.768 3.33 3.637-.63c-.018-.597-.146-1.309-.213-2.409c2.473 1.326 5.252 1.918 8.102 1.918c6.395 0 13.131-2.954 17.48-7.129c5.379-5.166 6.528-11.34 3.166-16.959m-35.002-8.711h.814v-2.054l-.441-.053c-3.467-.41-5.131-1.982-5.566-5.257l-.055-.404l-.408-.028c-1.057-.073-1.508-.603-1.508-1.772c0-.737.15-1.241.412-1.382c.322-.173.924.102 1.166.262l.34.224l.289-.283c.047-.046 4.807-4.607 13.961-4.63c.229.081 1.578.716 1.439 4.254l-.037.984l.816-.55c.229-.153.838-.435 1.162-.262c.262.14.412.644.412 1.383c0 1.17-.449 1.699-1.502 1.772l-.406.028l-.055.404c-.438 3.275-2.105 4.848-5.574 5.258l-.441.053v2.053l.863-.009c.006.001.195.041.48.116l1.707 2.689c0 .083-.031.116-.092.116c-.223 0-.848-.459-1.75-.459c-.836 0-1.912.394-3.129 1.912c-1.219-1.522-2.297-1.918-3.137-1.918c-.91 0-1.541.464-1.766.464c-.059 0-.09-.032-.09-.115l1.75-2.755l.346-.041m16.659 6.189l.285-.256c.203-.184.51-.063 2.051.827c.801.464.969 1.081.506 1.889c-.537.928-1.227 1.102-2.307.578l-.262-.127l-.238.163a.443.443 0 0 1-.471.015l-.609-.35a.44.44 0 0 1-.162-.603l.59-1.018l-7.693-4.355c-.422-.814-1.074-1.729-1.988-2.792c.707.2 1.848.589 2.83 1.231l7.468 4.798m-24.391-3.053l-5.734-5.71l-.324.165c-.244.131-.58-.144-1.791-1.286c-.34-.318-.514-.642-.523-.959c-.006-.225.07-.58.469-.996c.736-.777 1.447-.79 2.377-.032l.223.182l.27-.102a.447.447 0 0 1 .463.091l.514.485c.086.08.135.188.139.306a.464.464 0 0 1-.139.334l-.33.354l4.924 4.91l6.686-.814c-.883 1-1.512 1.893-1.949 2.688l-5.275.384m20.613 17.336c.152.337.303.666.359.757l.078.125l.141.038c2.025.551 2.482 1.091 3.391 2.168c.574.682 1.291 1.53 2.631 2.668c.406.346.613.743.553 1.063a.463.463 0 0 1-.307.363c-.266.096-.641-.024-1.021-.35c-.033-.021-3.227-2.186-6.27-3.704c-1.127-.563-2.746-2.103-4.035-3.515c.91-.12 1.75-.169 2.559-.169c.58 0 1.143.03 1.701.072c.064.137.14.309.22.484m-11.027 4.166c-.094-.286-.313-1.168-.463-1.797c.398-.556 1.006-1.222 1.775-1.48c.461-.154.898-.291 1.326-.417c.008.682-.031 1.488-.131 1.974l-.029.14l.072.124c.967 1.658.84 2.536.627 3.99c-.141.957-.314 2.149-.219 3.897c.029.519-.129.94-.418 1.13a.508.508 0 0 1-.521.042c-.23-.118-.375-.419-.398-.869c-.006-.037-.627-3.663-1.621-6.734m29.287.312c-6.354 6.102-18.133 9.318-25.535 4.388l-.031.046l-.016-.005c.039-.831.129-1.52.215-2.099c.215-1.472.371-2.544-.65-4.354c.104-.609.133-1.493.113-2.19c.813-.219 1.568-.39 2.277-.514c.797.897 2.961 3.237 4.586 4.05c2.492 1.243 5.088 2.927 5.891 3.457c.283.287.672.561 1.207.798c4.582 2.028 6.346-.384 3.24-2.315c-.629-.391-1.299-.639-2.459-1.651c-.354-.308-.834-.291-1.287-.085a22.772 22.772 0 0 1-1.27-1.397c-.922-1.094-1.488-1.764-3.607-2.364c-.064-.133-.156-.34-.252-.55l-.047-.104c2.555.259 5.189.778 9.184.778a51.86 51.86 0 0 0 4.289-.185c7.021-.58 8.504-4.825 8.486-8.361c1.195 4.302-.291 8.775-4.334 12.657" fill="#000000"></path><path d="M8.694 21.756a.814.814 0 0 1 .053-.845c.021-.027.045-.055.068-.08c.123-.133-.076-.331-.197-.2a1.106 1.106 0 0 0-.279.964c.043.241.184.444.357.609c.281.262.865.813.879.827c.133.125.334-.074.199-.199c-.253-.238-1.002-.932-1.08-1.076" fill="#000000"></path><path d="M22.798 15.676a1.533 1.533 0 1 1-3.066.004a1.533 1.533 0 0 1 3.066-.004" fill="#000000"></path><circle cx="28.761" cy="15.676" r="1.533" fill="#000000"></circle><path d="M27.462 20.342c-1.578 1.227-3.33 1.219-4.9 0c-.188-.146-.359.107-.23.344c.479.875 1.445 1.656 2.68 1.656c1.238 0 2.205-.781 2.684-1.656c.125-.236-.045-.49-.234-.344" fill="#000000"></path></g></svg>`,
  //     },
  //   ],
  // },
  // {
  //   id: 1,
  //   viewType: 'carousal',
  //   visibility: true,
  //   content: [
  //     {
  //       backgroundImageUrl:
  //         'https://drive.google.com/thumbnail?id=1z22aZuSFxzE7G8CznysfJ6AP1_krfIJO',
  //       textAlignment: '', //left/right
  //       redirection: 'Info about where to redirect(click)',
  //     },
  //     {
  //       backgroundImageUrl:
  //         'https://drive.google.com/thumbnail?id=1z22aZuSFxzE7G8CznysfJ6AP1_krfIJO',
  //       textAlignment: '', //left/right
  //       redirection: 'Info about where to redirect(click)',
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   viewType: 'horizontalFlatList',
  //   redirection: 'Info about where to redirect(click)',
  //   visibility: true,
  //   isTopCategoryNavigation: false,
  //   content: [],
  // },
  {
    id: 3,
    viewType: 'grid',
    NumberOfColumns: 2,
    visibility: true,
    content: [
      {
        id: 1,
        img: 'https://drive.google.com/thumbnail?id=1soO9PK1iadwupr39WOG2OKcMZVEz9_7Q',
        mktName: 'Sodepur Station fish Market',
        category: 'fish',
        redirection: {
          navKey: 'MktDeepDive',
          routeParam: {
            marketName: 'Sodepur Station fish Market',
          },
        },
        categoryTags: ['Fish'],
      },
      {
        id: 2,
        img: 'https://drive.google.com/thumbnail?id=1soO9PK1iadwupr39WOG2OKcMZVEz9_7Q',
        mktName: 'Sukhchor Fish Market',
        category: 'sample cat',
        redirection: {
          navKey: 'MktDeepDive',
          routeParam: {
            marketName: 'Sample Mkt Name',
          },
        },
        categoryTags: ['Fish'],
      },
      {
        id: 3,
        img: 'https://drive.google.com/thumbnail?id=1soO9PK1iadwupr39WOG2OKcMZVEz9_7Q',
        mktName: 'Bajar Para Fish Market',
        category: 'Fish',
        redirection: {
          navKey: 'MktDeepDive',
          routeParam: {
            marketName: 'Sample Mkt Name',
          },
        },
        categoryTags: ['Fish'],
      },
      {
        id: 4,
        img: 'https://drive.google.com/thumbnail?id=1soO9PK1iadwupr39WOG2OKcMZVEz9_7Q',
        mktName: 'Others',
        category: 'Fish',
        redirection: {
          navKey: 'MktDeepDive',
          routeParam: {
            marketName: 'Sample Mkt Name',
          },
        },
        categoryTags: ['Fish'],
      },
    ],
  },
  {
    id: 2,
    viewType: 'horizontalFlatList',
    redirection: 'Info about where to redirect(click)',
    visibility: true,
    isTopCategoryNavigation: false,
    headLine: 'Featured Product This Week',
    content: [
      {
        id: 1,
        name: 'Pabda',
        images: ['img1', 'img2', 'img3'],
        price: 200,
        discount: 20,
      },
      {
        id: 2,
        name: 'ilish',
        images: ['img1', 'img2', 'img3'],
        price: 200,
      },
      {
        id: 3,
        name: 'Koi',
        images: ['img1', 'img2', 'img3'],
        price: 200,
        discount: 20,
      },
    ],
  },
];
