import UserService from '../../services/UserService'
export default {
    state: {
        user: null,
    },
    getters: {
        loggedInUser({ user }) {
            return user;
        }
    },
    mutations: {
        setError(state) {
            state.user = null;
        },
        setUser(state, { data }) {
            state.user = data;
        }
    },
    actions: {
        async login(context, { userInfo }) {
            const { data } = await UserService.login(userInfo);
            context.commit({ type: 'setUser', data })
            return data;
        }
    }
}