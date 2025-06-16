import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from '@shared/Input'
import TextField from '@shared/TextField'

import { useAlertContext } from '@contexts/AlertContext'

function App() {
  const { open } = useAlertContext()
  return (
    <div className="App">
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2">t2</Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text typography="t5">t5</Text>

      <hr />

      <Button>button1</Button>
      <Button color="success">button2</Button>
      <Button color="error">button3</Button>
      <Button color="success" weak>
        button4
      </Button>
      <Button color="error" weak>
        button5
      </Button>
      <Button full size="large">
        button6
      </Button>
      <Button full disabled>
        button6
      </Button>

      <Input placeholder="login" aria-invalid={true} />

      <TextField label="아이디" />
      <TextField label="비밀번호" />
      <TextField
        label="비밀번호"
        hasError={true}
        helpMessage="이렇게 쓰면 된다는거야?"
      />

      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: '내역페이지에서 확인해주세요.',
            onButtonClick: () => {},
          })
        }}
      >
        open
      </Button>
    </div>
  )
}

export default App
