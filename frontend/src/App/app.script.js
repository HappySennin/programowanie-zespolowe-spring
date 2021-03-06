import ElHeader from "../../node_modules/element-ui/packages/header/src/main.vue";
import SideBarMenu from "./../components/SideBarMenu/side-bar-menu.vue";
import CarList from "../components/CarList/car-list.vue";
import {mapGetters} from 'vuex'

export default {
  components: {
    'el-header': ElHeader,
    'side-bar-menu': SideBarMenu,
    'car-list': CarList,
    // 'registration': Registration
  },

  computed: {
    ...mapGetters('signIn', {
      userLogged: 'userLogged',
      userLogin: "userLogin"
    }),
  },
}
