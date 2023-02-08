import styled from '@emotion/styled'

interface ProgressProps {
  progress: string
  orient?: 'horizon' | 'vertical'
}

const Progress = ({ progress, orient = 'horizon' }: ProgressProps) => {
  return (
    <div
      style={
        orient === 'vertical'
          ? {
              transformOrigin: '0 0',
              transform: 'rotate(90deg)',
            }
          : {}
      }
    >
      <BackgroundBar />
      <ProgressBar width={progress} />
    </div>
  )
}

export default Progress

const BackgroundBar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: var(--bg-gray);
`

const ProgressBar = styled.div(
  ({ width = '0%' }: { width?: string }) => [{ width: width }],
  [
    {
      transform: 'translateY(-100%)',
      height: '4px',
      borderRadius: '4px',
      backgroundColor: 'var(--primary)',
      transition: 'ease all 1s',
    },
  ]
)
