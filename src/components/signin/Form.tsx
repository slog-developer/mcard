import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import validator from 'validator'

import Flex from '@shared/Flex'
import TextField from '@shared/TextField'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'
import Text from '@shared/Text'
import { colors } from '@styles/colorPalette'
import { FormValues } from '@models/signin'

import { ChangeEvent, useCallback, useMemo, useState } from 'react'

function Form({ onSubmit }: { onSubmit: (formValues: FormValues) => void }) {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  })

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const errors = useMemo(() => validate(formValues), [formValues])

  const 제출가능한가 = Object.keys(errors).length === 0

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        label="이메일"
        name="email"
        placeholder="이메일을 입력하세요"
        onChange={handleFormValues}
        value={formValues.email}
      />
      <Spacing size={16} />
      <TextField
        label="비밀번호"
        name="password"
        onChange={handleFormValues}
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={formValues.password}
      />
      <Spacing size={32} />
      <Button
        size="medium"
        disabled={제출가능한가 === false}
        onClick={() => onSubmit(formValues)}
      >
        로그인
      </Button>
      <Spacing size={12} />
      <Link to="/signup" css={linkStyles}>
        <Text typography="t7">아직 계정이 없으신가요?</Text>
      </Link>
    </Flex>
  )
}

function validate(formValues: FormValues) {
  let errors: Partial<FormValues> = {}

  if (validator.isEmail(formValues.email) === false) {
    errors.email = '이메일 형식이 올바르지 않습니다.'
  }

  if (formValues.password.length < 8) {
    errors.password = '비밀번호는 8자 이상이어야 합니다.'
  }

  return errors
}

const formContainerStyles = css`
  padding: 24px;
`
const linkStyles = css`
  text-align: center;

  & > span:hover {
    color: ${colors.blue};
  }
`
export default Form
