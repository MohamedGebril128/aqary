// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';
import { BuildingCommunity } from 'tabler-icons-react';
// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const units = {
  id: 'units',
  title: <FormattedMessage id="units" />,
  icon: <BuildingCommunity size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'add-unit',
      title: <FormattedMessage id="Add Unit" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/dashboard/units/add_unit'
    },
    {
      id: 'sale-units',
      title: <FormattedMessage id="Sale Units" />,
      type: 'item',
      url: '/dashboard/units/sale_units'
    },
    {
      id: 'rent-units',
      title: <FormattedMessage id="Rent Units" />,
      type: 'item',
      url: '/dashboard/units/rent_units'
    },
    {
      id: 'shared-units',
      title: <FormattedMessage id="Shared Units" />,
      type: 'item',
      url: '/dashboard/units/shared_units'
    },
    {
      id: 'international-units',
      title: <FormattedMessage id="International Units" />,
      type: 'item',
      url: '/dashboard/units/international_units'
    },
    {
      id: 'rejected-units',
      title: <FormattedMessage id="Rejected Units" />,
      type: 'item',
      url: '/dashboard/units/rejected_units'
    },
    {
      id: 'deleted-units',
      title: <FormattedMessage id="Deleted Units" />,
      type: 'item',
      url: '/dashboard/units/deleted_units'
    },
    {
      id: 'unit-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/dashboard/units/activities'
    },
    {
      id: 'problem-reports',
      title: <FormattedMessage id="Problem Reports" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/dashboard/units/problem_reports'
    }
  ]
};

export default units;
