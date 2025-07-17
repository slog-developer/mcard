import styled from '@emotion/styled'

interface SpacingProps {
  size: number
  direction?: 'horizontal' | 'vertical'
}

const Spacing = styled.div<SpacingProps>`
  ${({ size, direction = 'vertical' }) =>
    direction === 'vertical' ? ` height: ${size}px;` : ` width: ${size}px;`}
`
export default Spacing
