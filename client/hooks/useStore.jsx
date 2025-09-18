import { create } from 'zustand'

const useStore = create((set) => ({
  user:null,
  islogin:false,
  internships:[],
  
  setInternships: (internships) => set({ internships }),
  setislogin: (islogin) => set({ islogin }),
  setUser: (user) => set({ user }),

 
}))
export default useStore;