import { GET_USERINFO } from "./mutation_type";
import { getUser } from '../service/getData';

export default {
  async getUserInfo({
    commit,
    state
  }) {
    let res = await getUser()
    commit(GET_USERINFO, res)
  }
}