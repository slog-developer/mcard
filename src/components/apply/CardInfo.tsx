import { MouseEvent, useCallback, useState } from 'react'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'
import { css } from '@emotion/react'

import { ApplyValues } from '@models/apply'
import FixedBottomButton from '@shared/FixedBottonButton'

type CardInfoValues = Pick<ApplyValues, 'isMaster' | 'isHipass' | 'isRf'>

function CardInfo({
  onNext,
}: {
  onNext: (cardInfoValues: CardInfoValues) => void
}) {
  const [cardInfoValues, setCardInfoValues] = useState<CardInfoValues>({
    isMaster: false,
    isHipass: false,
    isRf: false,
  })

  const { isMaster, isHipass, isRf } = cardInfoValues

  const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const $button = e.target as HTMLButtonElement

    const { value } = $button.dataset

    setCardInfoValues((prevValues) => ({
      ...prevValues,
      [$button.name]: JSON.parse(value as string),
    }))
  }, [])

  console.log('CardInfoValues', cardInfoValues)

  return (
    <div css={cardInfoContainerStyles}>
      <Button.Group title="해외결제">
        <Button
          name="isMaster"
          weak={isMaster === false}
          size="medium"
          data-value="true"
          onClick={handleButtonClick}
        >
          Master
        </Button>
        <Button
          name="isMaster"
          weak={isMaster === true}
          size="medium"
          data-value="false"
          onClick={handleButtonClick}
        >
          국내전용
        </Button>
      </Button.Group>

      <Spacing size={12} />

      <Button.Group title="후불교통기능">
        <Button
          name="isRf"
          weak={isRf === true}
          size="medium"
          data-value="false"
          onClick={handleButtonClick}
        >
          신청안함
        </Button>
        <Button
          name="isRf"
          weak={isRf === false}
          size="medium"
          data-value="true"
          onClick={handleButtonClick}
        >
          신청
        </Button>
      </Button.Group>

      <Spacing size={12} />

      <Button.Group title="후불하이패스카드">
        <Button
          name="isHipass"
          weak={isHipass === true}
          size="medium"
          data-value="false"
          onClick={handleButtonClick}
        >
          신청안함
        </Button>
        <Button
          name="isHipass"
          weak={isHipass === false}
          size="medium"
          data-value="true"
          onClick={handleButtonClick}
        >
          신청
        </Button>
      </Button.Group>

      <FixedBottomButton label="다음" onClick={() => onNext(cardInfoValues)} />
    </div>
  )
}

const cardInfoContainerStyles = css`
  padding: 24px;
`

export default CardInfo
