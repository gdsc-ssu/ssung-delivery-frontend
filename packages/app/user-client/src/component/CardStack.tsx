import styled from '@emotion/styled'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'

interface CardStackProps {
  elements: ReactNode[]
}

const CardStack = (props: CardStackProps) => {
  const cardStackRef = useRef<HTMLDivElement>(null)
  const cardKey = useRef<number>(0)
  const [cards, setCards] = useState<ReactNode[]>()

  useEffect(() => {
    setCards(props.elements)
  }, [])

  useEffect(() => {
    const $ = cardStackRef.current
    if (!$) return
    // if ($.getAttribute('customevent')) return
    // $.setAttribute('customevent', 'true')

    let startPoint: number
    let lastPoint: number
    const onTouchStart = (e: TouchEvent) => {
      startPoint = e.touches[0].screenX
    }
    const onTouchFinish = (
      e: TouchEvent,
      onSetCard: Dispatch<SetStateAction<ReactNode[] | undefined>>
    ) => {
      const $topCard =
        cardStackRef.current?.children[
          cardStackRef.current?.childElementCount - 1
        ]
      if (!$topCard) return
      lastPoint = e.changedTouches[0].screenX
      const deltaX = startPoint - lastPoint
      if (deltaX > 50) {
        $topCard.setAttribute('style', 'transform: translate3d(-200px, 0, 0)')
        onSetCard((prev) => prev?.slice(0, -1))
      } else {
        $topCard.setAttribute('style', 'transform: ')
      }
    }
    const onTouchMove = (e: TouchEvent) => {
      const $topCard =
        cardStackRef.current?.children[
          cardStackRef.current?.childElementCount - 1
        ]
      if (!$topCard) return
      const currentPoint = e.touches[0].screenX
      const deltaX = startPoint - currentPoint
      $topCard.setAttribute(
        'style',
        `transform: translate3d(-${deltaX}px, 0, 0)`
      )
    }
    $.addEventListener('touchstart', onTouchStart)
    $.addEventListener('touchend', (e) => onTouchFinish(e, setCards))
    $.addEventListener('touchmove', onTouchMove)

    return () => {
      $.removeEventListener('touchstart', onTouchStart)
      $.removeEventListener('touchend', (e) => onTouchFinish(e, setCards))
      $.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <Container ref={cardStackRef}>
      {cards?.map((Card, idx) => (
        <CardManager floor={idx} key={cardKey.current++}>
          {Card}
        </CardManager>
      ))}
    </Container>
  )
}

export default CardStack

interface CardManagerProps {
  floor: number
}
const CardManager = styled.div((props: CardManagerProps) => ({
  position: `relative`,
  right: `${175 * props.floor}px`,
}))

const Container = styled.div`
  position: relative;
  right: -15px;
  display: flex;
  width: 140px;
`
