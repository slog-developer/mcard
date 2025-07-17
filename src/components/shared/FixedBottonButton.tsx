import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { createPortal } from 'react-dom'

import Button from '@shared/Button'

interface FixedBottomButtonProps {
  label?: string
  onClick: () => void
  disabled?: boolean
}

function FixedBottomButton({
  label,
  onClick,
  disabled,
}: FixedBottomButtonProps) {
  const $portalRoot = document.getElementById('root-portal')
  if ($portalRoot == null) {
    return null
  }
  return createPortal(
    <Container>
      <Button
        size="medium"
        disabled={disabled}
        full
        onClick={onClick}
        css={buttonSytles}
      >
        {label}
      </Button>
    </Container>,
    $portalRoot,
  )
}

const slideup = keyframes`
  to {
    transform: translateY(0);
  }
`

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background-color: white;
  transform: translateY(100%);
  animation: ${slideup} 0.3s ease-in-out forwards;
`

const buttonSytles = css`
  border-radius: 8px;
`

export default FixedBottomButton
