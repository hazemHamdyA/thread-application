import { Form, ErrorMessage, Field, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
export default (app) => {
  defineRule('required', required)
  defineRule('email', email)
  defineRule('min', min)
  defineRule('unique', async (value, args) => {
    /*
super importent node if you want destructure array has name [one,tow]=array and alos in some case 
want to destructere same vatable but with object you can do this ({one,two}=array)
*/

    const [collection, field] = args

    const querySnapshot = await firebase
      .firestore()
      .collection(collection)
      .where(field, '==', value.toLowerCase())
      .get()
    return querySnapshot.empty
  })

  configure({
    generateMessage: localize('en', {
      messages: {
        required: '{field} is required',
        email: '{field} must be a valid email',
        min: '{field} must be 0:{min} characters long',
        unique: '{field} is already taken'
      }
    })
  })

  app.component('VForm', Form)
  app.component('ErrorMessage', ErrorMessage)
  app.component('VField', Field)
}

/*
required== (value) => {   if (value && value.trim()) return true
 else return 'This field is required'
}
*/
