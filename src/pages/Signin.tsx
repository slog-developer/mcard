import { useCallback } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from '@remote/firebase'
import Form from '@components/signin/Form'
import { FormValues } from '@/models/signin'
import { useAlertContext } from '@contexts/AlertContext'
import { FirebaseError } from 'firebase/app'
import { useNavigate } from 'react-router-dom'

function SigninPage() {
  const { open } = useAlertContext()
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (formValues: FormValues) => {
      const { email, password } = formValues

      try {
        const response = await signInWithEmailAndPassword(auth, email, password)

        navigate('/')
      } catch (e) {
        if (e instanceof FirebaseError) {
          if (e.code === 'auth/user-not-found') {
            open({
              title: '계정의 정보를 다시 확인해주세요.',
              onButtonClick: () => {
                //
              },
            })

            return
          }
        }

        open({
          title: '로그인에 실패했습니다. 다시 시도해주세요.',
          onButtonClick: () => {
            //
          },
        })
      }
    },
    [open],
  )
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SigninPage
