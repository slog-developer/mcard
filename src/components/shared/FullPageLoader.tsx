import Flex from './Flex'
import Text from './Text'
import Spacing from './Spacing'

function FullPageLoader({ message }: { message?: string }) {
  return (
    <Flex
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      justify="center"
      align="center"
    >
      <Flex direction="column" align="center">
        <img
          width={120}
          src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-47-323_512.gif"
          alt="loading"
        />
        {message != null ? (
          <>
            <Spacing size={120} />

            <Text typography="t4" bold>
              {message}
            </Text>
          </>
        ) : null}
      </Flex>
    </Flex>
  )
}

export default FullPageLoader
