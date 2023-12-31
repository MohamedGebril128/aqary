// third-party
import { FormattedMessage } from 'react-intl';
import { BuildingEstate } from 'tabler-icons-react';
// assets
import {
  IconApps,
  IconUserCheck,
  IconTrashX,
  IconHomeShare,
  IconPin,
  IconMapPin,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc
} from '@tabler/icons';

// constant
const icons = {
  IconApps,
  IconUserCheck,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc,
  IconPin,
  IconMapPin,
  IconHomeShare,
  IconTrashX
};

// ==============================|| Project MENU ITEMS ||============================== //

const project = {
  id: 'Project',
  title: <FormattedMessage id="Project" />,
  icon: <BuildingEstate size={23} strokeWidth={1.5} color={'black'} style={{ marginRight: '10px' }} />,
  type: 'group',
  children: [
    {
      id: 'add-project',
      title: <FormattedMessage id="Add Project" />,
      type: 'item',
      icon: icons.IconUserCheck,
      url: '/dashboard/project/add_project'
    },
    {
      id: 'local',
      title: <FormattedMessage id="Local Projects" />,
      type: 'item',
      icon: icons.IconPin,

      url: '/dashboard/project/project_management/local'
    },
    {
      id: 'international',
      title: <FormattedMessage id="International Projects" />,
      type: 'item',
      icon: icons.IconMapPin,
      url: '/dashboard/project/project_management/international'
    },
    {
      id: 'create-category',
      title: <FormattedMessage id="Create Category" />,
      type: 'item',
      icon: icons.IconMapPin,
      url: '/dashboard/project/create_category'
    },
    {
      id: 'shared-projects',
      title: <FormattedMessage id="Shared Projects" />,
      type: 'item',
      icon: icons.IconHomeShare,
      url: '/dashboard/project/shared_projects'
    },
    {
      id: 'blocked-projects',
      title: <FormattedMessage id="Blocked Projects" />,
      type: 'item',
      icon: icons.IconTrashX,
      url: '/dashboard/project/blocked_projects'
    },
    {
      id: 'deleted-projects',
      title: <FormattedMessage id="Deleted Projects" />,
      type: 'item',
      icon: icons.IconTrashX,
      url: '/dashboard/project/del_project'
    },
    {
      id: 'promotions',
      title: 'Manage Promotions',
      type: 'item',
      icon: icons.IconLayoutKanban,
      url: '/dashboard/project/promotions'
    },
    {
      id: 'manage-requests',
      title: <FormattedMessage id="Manage Requests" />,
      type: 'item',
      icon: icons.IconMail,
      url: '/dashboard/project/manage_requests'
    },
    {
      id: 'project-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBasket,
      url: '/dashboard/project/activities'
    }
  ]
};

export default project;
