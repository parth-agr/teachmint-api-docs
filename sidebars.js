/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  docs: [
    'api/intro',
    {
      type: 'category',
      label: 'Rooms',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: ['api/rooms/create_or_modify_room', 'api/rooms/delete_room'],
    },
    {
      type: 'category',
      label: 'Users',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: ['api/users/create_or_modify_user', 'api/users/delete_user'],
    },
    {
      type: 'category',
      label: 'Recorded Videos',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'api/recorded_videos/get_recorded_videos',
        'api/recorded_videos/delete_recorded_videos',
      ],
    },
  ],
};

module.exports = sidebars;
