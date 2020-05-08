export const state = () => ({
  loginDialog: false,
})
export const actions = {
  async LOGIN_WITH_EMAIL_LINK({ commit, dispatch, state }, { email }) {
    if (state.loggedIn) {
      return
    }
    try {
      await this.$fireAuth.sendSignInLinkToEmail(email, {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        url: process.env.BASE_URL + '/login',
        // This must be true.
        handleCodeInApp: true,
        // dynamicLinkDomain: 'example.page.link',}
      })
    } catch (error) {
      console.error('‼️', error)
    }
  },
  async LOGIN_WITH_GOOGLE({ commit, dispatch, state }) {
    if (state.loggedIn) {
      return
    }
    try {
      const provider = new this.$fireAuthObj.GoogleAuthProvider()
      await this.$fireAuth.signInWithPopup(provider)
    } catch (error) {
      console.error('‼️', error)
    }
  },
  async LOGIN_WITH_GITHUB({ commit, dispatch, state }) {
    if (state.loggedIn) {
      return
    }
    try {
      const provider = new this.$fireAuthObj.GithubAuthProvider()
      await this.$fireAuth.signInWithPopup(provider)
    } catch (error) {
      console.error('‼️', error)
    }
  },

  async LOGOUT_USER({ state }) {
    try {
      await this.$fireAuth.signOut()
      await this.$router.push('/')
      // state.loggedIn = false
      // state.user = {}
    } catch (error) {
      console.error(error)
    }
  },
}
export const mutations = {}