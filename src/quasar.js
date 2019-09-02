import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QDialog,
  Dialog,
  QCard,
  QCardSection,
  QCardActions,
  QInput,
  QDate,
  QPopupProxy,
  ClosePopup,
  QScrollArea,
  QTable,
  QTh,
  QTr,
  QTd,
  QSeparator,
  QSelect
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QDialog,
    QCard,
    QCardSection,
    QCardActions,
    QInput,
    QDate,
    QPopupProxy,
    QScrollArea,
    QTable,
    QTh,
    QTr,
    QTd,
    QSeparator,
    QSelect
  },
  directives: {
    ClosePopup
  },
  plugins: {
    Dialog
  }
})
