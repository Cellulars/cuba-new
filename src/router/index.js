import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Userauth from '../auth/js/index';

import Body from '../components/body';
import Auth from '../auth/auth';

/* Auth */
import login from '../auth/login';
import callback from '../pages/callback';
import Register from '../auth/register';

/* FAQ */
import Faq from '../pages/faq';

/* Support Ticket */
import Support from '../pages/support';

/* maintenance */
import Maintenance from '../pages/maintenance';

/* Error Pages */
import Error400 from '../errors/error_400';
import Error401 from '../errors/error_401';
import Error403 from '../errors/error_403';
import Error404 from '../errors/error_404';
import Error500 from '../errors/error_500';
import Error503 from '../errors/error_503';

/* comingsoon */
import ComingsoonSimple from '../pages/comingsoon/comingsoon_simple';
import ComingsoonImage from '../pages/comingsoon/comingsoon_image';
import ComingsoonVideo from '../pages/comingsoon/comingsoon_video';

/* Dashboards */
import Default from '../pages/dashboard/default';
import Ecommerce from '../pages/dashboard/ecommerce';

/* Widgets */
import GeneralWidgets from '../pages/widgets/general_widgets';
import ChartWidgets from '../pages/widgets/chart_widgets';

/* projects */
import projectlist from '../pages/project/project-list';
import createproject from '../pages/project/create-project';

/* uikits */
import alert from '../pages/uikits/alert';
import Helperclasses from '../pages/uikits/helper_classes';
import Avatars from '../pages/uikits/avatars';
import Grid from '../pages/uikits/grid';
import Tagpills from '../pages/uikits/tag_pills';
import Typography from '../pages/uikits/typography';
import Progressbar from '../pages/uikits/progress_bar';
import Modal from '../pages/uikits/modal';
import Popover from '../pages/uikits/popover';
import Tooltip from '../pages/uikits/tooltip';
import Spinners from '../pages/uikits/loader';
import Dropdown from '../pages/uikits/dropdown';
import Accordion from '../pages/uikits/accordion';
import Boxshadow from '../pages/uikits/box_shadow';
import Lists from '../pages/uikits/lists';
/* advance */
import Scrollable from '../pages/advance/scrollable';
import Sweetalert from '../pages/advance/sweetalert';
import Tree from '../pages/advance/tree';
import Rating from '../pages/advance/rating';
import Pagination from '../pages/advance/pagination';
import Ribbons from '../pages/advance/ribbons';
import Tour from '../pages/advance/tour';
import Rangeslider from '../pages/advance/range_slider';
import Breadcrumb from '../pages/advance/breadcrumb';
import Upload from '../pages/advance/upload';
import Sticky from '../pages/advance/sticky';
import Toastr from '../pages/advance/toastr';
import ImageCropper from '../pages/advance/image_cropper';
import Draganddrop from '../pages/advance/draganddrop';
/* charts */
import GoogleChart from '../pages/charts/google_chart';
// import Chartjs from '../pages/charts/chartjs';
import Chartist from '../pages/charts/chartist';
import ApexChart from '../pages/charts/apexchart';
/* icons */
import Flag from '../pages/icons/flag';
import Ico from '../pages/icons/ico_icon';
import Themify from '../pages/icons/themify_icon';
import Fontawesome from '../pages/icons/font_awesome';
import FeatherIcon from '../pages/icons/feather_icon';
import WhetherIcon from '../pages/icons/weather';

/* Buttons */
import Default_buttons from '../pages/buttons/default_buttons';
import Flat_buttons from '../pages/buttons/flat_buttons';
import Edge_buttons from '../pages/buttons/edge_buttons';
import Raised_buttons from '../pages/buttons/raised_buttons';
import Group_buttons from '../pages/buttons/group_buttons';
/* Form */
import FormWizrd from '../pages/forms/form_wizard';
import FormValidation from '../pages/forms/form_validation';
import FormBaseInputs from '../pages/forms/form_base_inputs';
import FormCheckboxRadio from '../pages/forms/form_checkbox_radio';
import FormInputGroups from '../pages/forms/form_input_groups';
import FormMegaOptions from '../pages/forms/form_mega_options';
/* Form Widgets */
import FormDatepicker from '../pages/form_widgets/datepicker';
import FormSelect2 from '../pages/form_widgets/select2';
import FormSwitch from '../pages/form_widgets/switch';
import FormTypeahead from '../pages/form_widgets/typeahead';
import FormClipboard from '../pages/form_widgets/clipboard';
import FormTouchspin from '../pages/form_widgets/touchspin';
/* E-Commerce */
import Products from '../pages/ecommerce/products';
import ProductDetails from '../pages/ecommerce/product_details';
import Cart from '../pages/ecommerce/cart';
import Wishlist from '../pages/ecommerce/wishlist';
import Checkout from '../pages/ecommerce/checkout';
import Invoice from '../pages/ecommerce/invoice';
import Success from '../pages/ecommerce/success';
import OrderHistory from '../pages/ecommerce/order_history';
import PaymentDetails from '../pages/ecommerce/payment_details';
/* Chat */
import Chat from '../pages/chat/chat';
import Videochat from '../pages/chat/videochat';
/* Email  */
import Email from '../pages/email/app';
/* File Manager  */
import FileManager from '../pages/filemanager';
/* Kanban board */
import Kanban from '../pages/kanban';
/* Cards */
import Basic from '../pages/cards/basic';
import Creative from '../pages/cards/creative';
import Tabbed from '../pages/cards/tabbed';
import Draggable from '../pages/cards/draggable';

/* pricing */
import Pricing from '../pages/pricing/pricing';
/* sample page */
import SamplePage from '../pages/sample_page';
import Todo from '../pages/todo/todo';
import FirebaseTodo from '../pages/todo/firebase_todo';
/* bootstrap tables */
import BootstrapBasic from '../pages/tables/bootstrap/basic';
import BootstrapSizing from '../pages/tables/bootstrap/sizing';
import BootstrapBorder from '../pages/tables/bootstrap/border';
import BootstrapStyling from '../pages/tables/bootstrap/styling';
/* datatable tables */
import DatatableBasic from '../pages/tables/datatable/basic_init';
import DatatableSelectDelete from '../pages/tables/datatable/select_delete';
import FilterTable from '../pages/tables/datatable/filter';
import DatatableExport from '../pages/tables/datatable/data_export';
/* Bookmark */
import Bookmark from '../pages/bookmark';
/* calendar */
import Calendar from '../pages/calendar/fullcalendar';
/* Timeline */
import TimelineOne from '../pages/timeline/timeline_one';

/* vuejs smart table */
import SmartTable from '../pages/tables/vuejs_smart_table/basic';

/* Editor */
import SimpleEditor from '../pages/editor/simple_editor';
import CkEditor from '../pages/editor/ckeditor.vue';


/* User Profile */
import UserProfile from '../pages/users/profile';
import UserEditProfile from '../pages/users/edit-profile';
import UserCards from '../pages/users/cards';

/* Blogs */
import Blog from '../pages/blogs/blog';
import BlogSingle from '../pages/blogs/blog_single';

/* Maps */
import GoogleMaps from '../pages/maps/vue_google_maps';
import VueLeaflet from '../pages/maps/vue_leaflet';

/* Job Search */
import JobList from '../pages/job/job_list';
import JobDetails from '../pages/job/job_details';
import JobApply from '../pages/job/job_apply';

/* Search */
import Search from '../pages/search';

/* Social App */
import Social from '../pages/social_app';

/* Authentication */
import LoginOne from '../pages/authentication/login_one';
import LoginTwo from '../pages/authentication/login_two';
import LoginValidate from '../pages/authentication/login_with_validation';
import RegisterImage from '../pages/authentication/register_image';
import RegisterImage2 from '../pages/authentication/register_image2';
import Unlock from '../pages/authentication/unlock';
import ForgetPassword from '../pages/authentication/forget_password';
import ResetPassword from '../pages/authentication/reset_password';

/* Learning */
import Learninglist from '../pages/learning/learninglist';
import Coursedetailed from '../pages/learning/coursedetailed';

/* knowledgebase */
import Knowledgebase from '../pages/knowledgebase/knowledgebase';

// Gallery
import GridGallery from '../pages/gallery/grid-gallery';
import GridGalleryDesc from '../pages/gallery/gallery-desc';
import GalleryMasonary from '../pages/gallery/masonary-gallery';
import GalleryMasonaryDesc from '../pages/gallery/masonary-desc';
import HoverEffect from '../pages/gallery/hover-effect';

// component

Vue.use(Router);

const routes = [
{ path: '', redirect: { name: 'default' } },
{
  path: '/dashboard',
  component: Body,
  meta: {
    requiresAuth: true
  },
  children: [
  {
    path: 'default',
    name: 'default',
    component: Default,
    meta: {
      title: 'Default Dashboard | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'ecommerce',
    name: 'ecommerce',
    component: Ecommerce,
    meta: {
      title: 'Ecommerce Dashboard | Cuba - Premium Admin Template',
    }
  }
  ]
},
{
  path: '/widgets',
  component: Body,
  children: [
  {
    path: 'general',
    name: 'general',
    component: GeneralWidgets,
    meta: {
      title: 'General Widgets | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'chart',
    name: 'chart',
    component: ChartWidgets,
    meta: {
      title: 'Chart Widgets | Cuba - Premium Admin Template',
    }
  },
  ]
},
{
  path: '/project',
  component: Body,
  children: [
  {
    path: 'projectlist',
    name: 'project-list',
    component: projectlist,
    meta: {
      title: 'Project List | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'create-project',
    name: 'create-project',
    component: createproject,
    meta: {
      title: 'Create Project | Cuba - Premium Admin Template',
    }
  }
  ]
},
{
  path: '/uikits',
  component: Body,
  children: [
  {
    path: 'alert',
    name: 'alert',
    component: alert,
    meta: {
      title: 'Alert | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'helper-classes',
    name: 'Helperclasses',
    component: Helperclasses,
    meta: {
      title: 'Helperclasses | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'avatars',
    name: 'Avatars',
    component: Avatars,
    meta: {
      title: 'Avatars | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'grid',
    name: 'Grid',
    component: Grid,
    meta: {
      title: 'Grid | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'tag-pills',
    name: 'Tagpills',
    component: Tagpills,
    meta: {
      title: 'Tagpills | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'typography',
    name: 'Typography',
    component: Typography,
    meta: {
      title: 'Typography | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'progress-bar',
    name: 'Progressbar',
    component: Progressbar,
    meta: {
      title: 'Progressbar | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'modal',
    name: 'Modal',
    component: Modal,
    meta: {
      title: 'Modal | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'popover',
    name: 'Popover',
    component: Popover,
    meta: {
      title: 'Popover | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'tooltip',
    name: 'Tooltip',
    component: Tooltip,
    meta: {
      title: 'Tooltip | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'loader',
    name: 'Spinners',
    component: Spinners,
    meta: {
      title: 'Spinners | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'dropdown',
    name: 'Dropdown',
    component: Dropdown,
    meta: {
      title: 'Dropdown | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'accordion',
    name: 'Accordion',
    component: Accordion,
    meta: {
      title: 'Accordion | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'box-shadow',
    name: 'Boxshadow',
    component: Boxshadow,
    meta: {
      title: 'Boxshadow | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'lists',
    name: 'Lists',
    component: Lists,
    meta: {
      title: 'Lists | Cuba - Premium Admin Template',
    }
  }
  ]
},
{
  path: '/advance',
  component: Body,
  children: [
  {
    path: 'scrollable',
    name: 'Scrollable',
    component: Scrollable,
    meta: {
      title: 'Scrollable | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'sweetalert',
    name: 'Sweetalert',
    component: Sweetalert,
    meta: {
      title: 'Sweetalert | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'tree',
    name: 'Tree',
    component: Tree,
    meta: {
      title: 'Tree | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'rating',
    name: 'Rating',
    component: Rating,
    meta: {
      title: 'Rating | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'pagination',
    name: 'Pagination',
    component: Pagination,
    meta: {
      title: 'Pagination | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'ribbons',
    name: 'Ribbons',
    component: Ribbons,
    meta: {
      title: 'Ribbons | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'tour',
    name: 'Tour',
    component: Tour,
    meta: {
      title: 'Tour | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'range-slider',
    name: 'Rangeslider',
    component: Rangeslider,
    meta: {
      title: 'Rangeslider | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'breadcrumb',
    name: 'Breadcrumb',
    component: Breadcrumb,
    meta: {
      title: 'Breadcrumb | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'upload',
    name: 'Upload',
    component: Upload,
    meta: {
      title: 'Upload | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'sticky',
    name: 'Sticky',
    component: Sticky,
    meta: {
      title: 'Sticky | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'toastr',
    name: 'Toastr',
    component: Toastr,
    meta: {
      title: 'Toastr | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'image-cropper',
    name: 'ImageCropper',
    component: ImageCropper,
    meta: {
      title: 'ImageCropper | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'dragdrop',
    name: 'Draganddrop',
    component: Draganddrop,
    meta: {
      title: 'Draganddrop | Cuba - Premium Admin Template',
    }
  },
  ]
},
{
  path: '/chart',
  component: Body,
  children: [
  {
    path: 'google',
    name: 'Google Chart',
    component: GoogleChart,
    meta: {
      title: 'GoogleChart | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'chartist',
    name: 'Chartist',
    component: Chartist,
    meta: {
      title: 'Chartist | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'apexchart',
    name: 'ApexChart',
    component: ApexChart,
    meta: {
      title: 'ApexChart | Cuba - Premium Admin Template',
    }
  },
  ]
},
{
  path: '/gallery',
  component: Body,
  children:[
    {
      path: 'grid-gallery',
      name: 'GridGallery',
      component:GridGallery,
      meta: {
        title: 'GridGallery | Cuba - Premium Admin Template',
      }
    },
    {
      path: 'gallery-desc',
      name: 'GridGalleryDesc',
      component:GridGalleryDesc,
      meta: {
        title: 'GridGalleryDesc | Cuba - Premium Admin Template',
      }
    },
    {
      path: 'gallery-masonary',
      name: 'GalleryMasonary',
      component:GalleryMasonary,
      meta: {
        title: 'GalleryMasonary | Cuba - Premium Admin Template',
      }
    },
    {
      path: 'gallery-masonary-desc',
      name: 'GalleryMasonaryDesc',
      component:GalleryMasonaryDesc,
      
    },
    {
      path: 'hover-effect',
      name: 'HoverEffect',
      component:HoverEffect,
      meta: {
        title: 'HoverEffect | Cuba - Premium Admin Template',
      }
    } 
  ]
},
{
  path: '/editor',
  component: Body,
  children:[
    {
      path: 'simple-editor',
      name: 'SimpleEditor',
      component:SimpleEditor,
      meta: {
        title: 'SimpleEditor | Cuba - Premium Admin Template',
      }
    },
    {
      path: 'ck-editor',
      name: 'CkEditor',
      component:CkEditor,
       meta: {
        title: 'CkEditor | Cuba - Premium Admin Template',
      }
      
    }
  ]
},
{
  path:'/users',
  component: Body,
  children:[
    {
      path: 'profile',
      name: 'UserProfile',
      component:UserProfile,
       meta: {
        title: 'serProfile | Cuba - Premium Admin Template',
      }
    },
    {
      path: 'edit',
      name: 'UserEditProfile',
      component:UserEditProfile,
       meta: {
        title: 'serEditProfile | Cuba - Premium Admin Template',
      }
    },
    {
      path: 'cards',
      name: 'UserCards',
      component:UserCards,
       meta: {
        title: 'serCards | Cuba - Premium Admin Template',
      }
    }
  ]
},
{
  path:'/blog',
  component: Body,
  children:[
    {
      path: 'details',
      name: 'Blog',
      component:Blog,
       meta: {
        title: 'log | Cuba - Premium Admin Template',
      }
    },
    {
      path: 'single',
      name: 'BlogSingle',
      component:BlogSingle,
       meta: {
        title: 'logSingle | Cuba - Premium Admin Template',
      }
    }
  ]
},
{
  path:'/maps',
  component: Body,
  children:[
    {
      path: 'vue-google-maps',
      name: 'GoogleMaps',
      component:GoogleMaps,
       meta: {
        title: 'oogleMaps | Cuba - Premium Admin Template',
      }
    },
    {
      path: 'vue-leaflet-maps',
      name: 'VueLeaflet',
      component:VueLeaflet,
       meta: {
        title: 'ueLeaflet | Cuba - Premium Admin Template',
      }
    }
  ]
},
{
  path: '/icons',
  component: Body,
  children:[
  {
    path: 'flag',
    name: 'Flag',
    component: Flag,
     meta: {
        title: 'Flag | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'ico',
    name: 'Ico',
    component: Ico,
     meta: {
        title: 'Ico | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'themify',
    name: 'Themify',
    component: Themify,
     meta: {
        title: 'Themify | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'fontawesome',
    name: 'Fontawesome',
    component: Fontawesome,
     meta: {
        title: 'Fontawesome | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'feather_icon',
    name: 'FeatherIcon',
    component: FeatherIcon,
     meta: {
        title: 'FeatherIcon | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'whether',
    name: 'WhetherIcon',
    component: WhetherIcon,
     meta: {
        title: 'WhetherIcon | Cuba - Premium Admin Template',
      }
  }
  ]
},
{
  path: '/form',
  component: Body,
  children: [
  {
    path: 'wizard',
    name: 'FormWizard',
    component: FormWizrd,
     meta: {
        title: 'FormWizrd | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'validation',
    name: 'FormValidation',
    component: FormValidation,
     meta: {
        title: 'FormValidation | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'inputs',
    name: 'FormBaseInputs',
    component: FormBaseInputs,
     meta: {
        title: 'FormBaseInputs | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'checkbox-radio',
    name: 'FormCheckboxRadio',
    component: FormCheckboxRadio,
     meta: {
        title: 'FormCheckboxRadio | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'input-groups',
    name: 'FormInputGroups',
    component: FormInputGroups,
     meta: {
        title: 'FormInputGroups | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'mega-options',
    name: 'FormMegaOptions',
    component: FormMegaOptions,
     meta: {
        title: 'FormMegaOptions | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'datepicker',
    name: 'FormDatepicker',
    component: FormDatepicker,
     meta: {
        title: 'FormDatepicker | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'select2',
    name: 'FormSelect2',
    component: FormSelect2,
     meta: {
        title: 'FormSelect2 | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'switch',
    name: 'FormSwitch',
    component: FormSwitch,
     meta: {
        title: 'FormSwitch | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'typeahead',
    name: 'FormTypeahead',
    component: FormTypeahead,
     meta: {
        title: 'FormTypeahead | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'clipboard',
    name: 'FormClipboard',
    component: FormClipboard,
     meta: {
        title: 'FormClipboard | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'touchspin',
    name: 'FormTouchspin',
    component: FormTouchspin,
     meta: {
        title: 'FormTouchspin | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'mega-options',
    name: 'Form Mega Options',
    component: FormMegaOptions,
     meta: {
        title: 'FormMegaOptions | Cuba - Premium Admin Template',
      }
  }
  ]
},
{
  path: '/table',
  component: Body,
  children: [
  {
    path: 'basic',
    name: 'BootstrapBasic',
    component: BootstrapBasic,
     meta: {
        title: 'BootstrapBasic | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'sizing',
    name: 'BootstrapSizing',
    component: BootstrapSizing,
     meta: {
        title: 'BootstrapSizing | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'border',
    name: 'BootstrapBorder',
    component: BootstrapBorder,
     meta: {
        title: 'BootstrapBorder | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'styling',
    name: 'BootstrapStyling',
    component: BootstrapStyling,
     meta: {
        title: 'BootstrapStyling | Cuba - Premium Admin Template',
      }
  },
  {
    path: '/datatable-basic',
    name: 'DatatableBasic',
    component: DatatableBasic,
     meta: {
        title: 'DatatableBasic | Cuba - Premium Admin Template',
      }
  },
  {
    path: '/datatable-select-delete',
    name: 'DatatableSelectDelete',
    component: DatatableSelectDelete,
     meta: {
        title: 'DatatableSelectDelete | Cuba - Premium Admin Template',
      }
  },
  {
    path: '/filter-table',
    name: 'FilterTable',
    component: FilterTable,
     meta: {
        title: 'FilterTable | Cuba - Premium Admin Template',
      }
  },
  {
    path: '/datatable-export',
    name: 'DatatableExport',
    component: DatatableExport,
     meta: {
        title: 'DatatableExport | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'smarttable',
    name: 'SmartTable',
    component: SmartTable,
     meta: {
        title: 'SmartTable | Cuba - Premium Admin Template',
      }
  },
  ]
},
{
  path: '/buttons',
  component: Body,
  children:[
  {
    path: 'default',
    name: 'default_buttons',
    component: Default_buttons,
     meta: {
        title: 'Default_buttons | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'flat',
    name: 'flat_buttons',
    component: Flat_buttons,
     meta: {
        title: 'Flat_buttons | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'edge',
    name: 'edge_buttons',
    component: Edge_buttons,
     meta: {
        title: 'Edge_buttons | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'raised',
    name: 'raised_buttons',
    component: Raised_buttons,
     meta: {
        title: 'Raised_buttons | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'group',
    name: 'group_buttons',
    component: Group_buttons,
     meta: {
        title: 'Group_buttons | Cuba - Premium Admin Template',
      }
  }
  ]
},
{
  path: '/ecommerce',
  component: Body,
  children: [

  {
    path: 'product',
    name: 'Product',
    component: Products,
     meta: {
        title: 'Products | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'details/:id',
    name: 'Product Details',
    component: ProductDetails,
     meta: {
        title: 'ProductDetails | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'cart',
    name: 'Cart',
    component: Cart,
     meta: {
        title: 'Cart | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'wishlist',
    name: 'Wishlist',
    component: Wishlist,
     meta: {
        title: 'Wishlist | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'checkout',
    name: 'Checkout',
    component: Checkout,
     meta: {
        title: 'Checkout | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'invoice',
    name: 'Invoice',
    component: Invoice,
     meta: {
        title: 'Invoice | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'success',
    name: 'Success',
    component: Success,
     meta: {
        title: 'Success | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'order/history',
    name: 'Order History',
    component: OrderHistory,
     meta: {
        title: 'OrderHistory | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'payment/details',
    name: 'payment Details',
    component: PaymentDetails,
     meta: {
        title: 'PaymentDetails | Cuba - Premium Admin Template',
      }
  },
  ]
},
{
  path:'/cards',
  component:Body,
  children:[
  {
    path:'basic',
    name:'Basic',
    component:Basic,
    meta: {
      title: 'BootstrapStyling | Cuba - Premium Admin Template',
    }
  },
  {
    path:'creative',
    name:'Creative',
    component:Creative,
    meta: {
      title: 'Creative | Cuba - Premium Admin Template',
    }
  },
  {
    path:'tabbed',
    name:'Tabbed',
    component:Tabbed,
    meta: {
      title: 'Tabbed | Cuba - Premium Admin Template',
    }
  },
  {
    path:'draggable',
    name:'Draggable',
    component:Draggable,
    meta: {
      title: 'Draggable | Cuba - Premium Admin Template',
    }
  }
  ]
},
{
  path: '/app',
  component: Body,
  children: [
  {
    path: 'todo',
    name: 'todo',
    component: Todo,
     meta: {
        title: 'Todo | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'firebase-todo',
    name: 'FirebaseTodo',
    component: FirebaseTodo,
     meta: {
        title: 'FirebaseTodo | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'chat',
    name: 'chat',
    component: Chat,
     meta: {
        title: 'Chat | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'videochat',
    name: 'Video chat',
    component: Videochat,
     meta: {
        title: 'Video Chat | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'email',
    name: 'Email',
    component: Email,
     meta: {
        title: 'Email, | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'filemanager',
    name: 'File Manager',
    component: FileManager,
     meta: {
        title: 'File Manager, | Cuba - Premium Admin Template',
      }
  },
  {
    path: 'kanban',
    name: 'Kanban Board',
    component: Kanban,
     meta: {
        title: 'Kanban Board, | Cuba - Premium Admin Template',
      }
  },
  {
    path:'bookmark',
    name:'Bookmark',
    component:Bookmark,
    meta: {
      title: 'Bookmark | Cuba - Premium Admin Template',
    }
  },
  {
    path:'calendar',
    name:'Calendar',
    component:Calendar,
    meta: {
      title: 'Calendar | Cuba - Premium Admin Template',
    }
  }
  ]
},
{
  path: '/timeline',
  component: Body,
  children: [
  {
    path: 'one',
    name: 'TimelineOne',
    component: TimelineOne,
     meta: {
        title: 'TimelineOne | Cuba - Premium Admin Template',
      }
  }
  ]
},
{
  path: '/auth',
  component: Auth,
  children: [
  {
    path: 'login',
    name: 'Login 1',
    component: login,
    meta: {
      title: ' login | Cuba - Premium Admin Template',
    }
  },
  {
    path: 'register',
    name: 'register 1',
    component: Register,
    meta: {
      title: ' Register | Cuba - Premium Admin Template',
    }
  }
  ]
},
{
  path: '/pages',
  component: Body,
  children:[
    {
      path:'/pages/sample-page',
      name:'SamplePage',
      component:SamplePage,
      meta: {
        title: 'SamplePage | Cuba - Premium Admin Template',
      }
    },
    {
      path:'/pages/pricing',
      name:'Pricing',
      component:Pricing,
      meta: {
      title: 'Pricing | Cuba - Premium Admin Template',
    }
    }
  ]
},
{
  path: '/callback',
  name: 'callback',
  component: callback,
  meta: {
      title: 'Auth0',
  }
},
{
  path: '/pages',
  component: Body,
  children:[
    {
      path:'/pages/faq',
      name:'Faq',
      component:Faq,
      meta: {
      title: 'Faq | Cuba - Premium Admin Template',
    }
    },
    {
      path:'/pages/support',
      name:'Support',
      component:Support,
      meta: {
      title: 'Support | Cuba - Premium Admin Template',
    }
    },
    {
      path:'/pages/social-app',
      name:'Social',
      component:Social,
      meta: {
      title: 'Social | Cuba - Premium Admin Template',
    }
    }
  ]
},
{
  path:'/job',
  component:Body,
  children:[
    {
      path:'/job/list',
      name:'JobList',
      component:JobList,
      meta: {
      title: 'JobList | Cuba - Premium Admin Template',
    }
    },
    {
      path:'/job/details/:id',
      name:'JobDetails',
      component:JobDetails,
      meta: {
      title: 'JobDetails, | Cuba - Premium Admin Template',
    },
      props:true
    },
    {
      path:'/job/apply/:id',
      name:'JobApply',
      component:JobApply,
      meta: {
      title: 'JobApply, | Cuba - Premium Admin Template',
    },
      props:true
    }
  ]
},
{
  path:'/search',
  component:Body,
  children:[
    {
      path:'/pages/search',
      name:'Search',
      component:Search,
      meta: {
        title: 'Search | Cuba - Premium Admin Template',
      }
    }
  ]
},
{
  path:'/learning',
  component:Body,
  children:[
    {
      path:'/learning/list',
      name:'Learninglist',
      component:Learninglist,
      meta: {
        title: 'Learninglist | Cuba - Premium Admin Template',
      }
    },
    {
      path:'/learning/details/:id',
      name:'Coursedetailed',
      component:Coursedetailed,
      meta: {
      title: 'Coursedetailed, | Cuba - Premium Admin Template',
      },
      props:true
    }
  ]
},
{
  path:'/knowledgebase',
  component:Body,
  children:[
    {
      path:'/',
      name:'Knowledgebase',
      component:Knowledgebase,
      meta: {
      title: 'Knowledgebase | Cuba - Premium Admin Template',
    }
    }
  ]
},
{
  path:'/error-400',
  name:'Error400',
  component:Error400,
  meta: {
      title: 'Error400 | Cuba - Premium Admin Template',
    }
},
{
  path:'/error-401',
  name:'Error401',
  component:Error401,
  meta: {
      title: 'Error401 | Cuba - Premium Admin Template',
    }
},
{
  path:'/error-403',
  name:'Error403',
  component:Error403,
  meta: {
      title: 'Error403 | Cuba - Premium Admin Template',
    }
},
{
  path:'/error-404',
  name:'Error404',
  component:Error404,
  meta: {
      title: 'Error404 | Cuba - Premium Admin Template',
    }
},
{
  path:'/error-500',
  name:'Error500',
  component:Error500,
  meta: {
      title: 'Error500 | Cuba - Premium Admin Template',
    }
},
{
  path:'/error-503',
  name:'Error503',
  component:Error503,
  meta: {
      title: 'Error503 | Cuba - Premium Admin Template',
    }
},
{
  path:'/maintenance',
  name:'Maintenance',
  component:Maintenance,
  meta: {
      title: 'Maintenance | Cuba - Premium Admin Template',
    }
},
{
  path:'/comingsoon/comingsoon-simple',
  name:'ComingsoonSimple',
  component:ComingsoonSimple,
  meta: {
      title: 'ComingsoonSimple | Cuba - Premium Admin Template',
    }
},
{
  path:'/comingsoon/comingsoon-image',
  name:'ComingsoonImage',
  component:ComingsoonImage,
  meta: {
      title: 'ComingsoonImage | Cuba - Premium Admin Template',
    }
},
{
  path:'/comingsoon/comingsoon-video',
  name:'ComingsoonVideo',
  component:ComingsoonVideo,
  meta: {
      title: 'ComingsoonVideo | Cuba - Premium Admin Template',
    }
},
{
  path:'/authentication/login/one',
  name:'LoginOne',
  component:LoginOne,
  meta: {
      title: 'LoginOne | Cuba - Premium Admin Template',
    }
},
{
  path:'/authentication/login/two',
  name:'LoginTwo',
  component:LoginTwo,
  meta: {
      title: 'LoginTwo | Cuba - Premium Admin Template',
    }
},
{
  path:'/authentication/login/validate',
  name:'LoginValidate',
  component:LoginValidate,
  meta: {
      title: 'LoginValidate | Cuba - Premium Admin Template',
    }
},
{
  path:'/authentication/register/image',
  name:'RegisterImage',
  component:RegisterImage,
  meta: {
      title: 'RegisterImage | Cuba - Premium Admin Template',
    }
},
{
  path:'/authentication/register/image2',
  name:'RegisterImage2',
  component:RegisterImage2,
  meta: {
      title: 'RegisterImage2 | Cuba - Premium Admin Template',
    }
},
{
  path:'/authentication/unlockuser',
  name:'Unlock',
  component:Unlock,
  meta: {
      title: 'Unlock | Cuba - Premium Admin Template',
    }
},
{
  path:'/authentication/forgetpassword',
  name:'ForgetPassword',
  component:ForgetPassword,
  meta: {
      title: 'ForgetPassword | Cuba - Premium Admin Template',
    }
},
{
  path:'/authentication/resetpassword',
  name:'ResetPassword',
  component:ResetPassword,
  meta: {
      title: 'ResetPassword | Cuba - Premium Admin Template',
    }
},

];

const router = new Router({
  routes,
  base: process.env.BASE_URL,
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(() => {
    if(to.meta.title)
      document.title = to.meta.title;
    const CurrentUser = firebase.auth().currentUser;    
    const  path = ['/auth/login','/auth/register'];
    if (path.includes(to.path) || to.path === '/callback' || CurrentUser || Userauth.isAuthenticatedUser()){
      return next();
    }
    next('/auth/login');
  });
});

export default router;
