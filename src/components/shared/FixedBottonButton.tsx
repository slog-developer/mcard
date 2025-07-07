import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { createPortal } from 'react-dom'

import Button from '@shared/Button'

interface FixedBottomButtonProps {
  label?: string
  onClick: () => void
}

function FixedBottomButton({ label, onClick }: FixedBottomButtonProps) {
  const $portalRoot = document.getElementById('root-portal')
  if ($portalRoot == null) {
    return null
  }
  return createPortal(
    <Container>
      <Button size="medium" full onClick={onClick} css={buttonSytles}>
        {label}
      </Button>
    </Container>,
    $portalRoot,
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background-color: white;
`

const buttonSytles = css`
  border-radius: 8px;
`

export default FixedBottomButton
