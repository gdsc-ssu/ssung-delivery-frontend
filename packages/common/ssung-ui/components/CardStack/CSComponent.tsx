import styled from '@emotion/styled'
import React, { useContext } from 'react'
import { ReactNode, useEffect, useRef } from 'react'
import { CardDispatchContext } from './CSContext'

interface CardStackProps {
  elements: ReactNode[]
}

const CSComponent = (props: CardStackProps) => {
  const cardStackRef = useRef<HTMLDivElement>(null)
  const cardKey = useRef<number>(0)

  const cardStackDispatch = useContext(CardDispatchContext)
  const dispatchCardStack = (domIdx: number) =>
    cardStackDispatch({ type: 'NOW_CARD_IDX', domIdx })

  const updateRootCardIdx = (dom: HTMLDivElement) => {
    if (!dom) return
    const showedDoms = [...dom.children].filter(
      // @ts-ignore
      (dom) => !dom.attributes?.style
    )

    return showedDoms.length - 1
  }

  useEffect(() => {
    const $ = cardStackRef.current
    if (!$) return

    let startPoint: number
    let lastPoint: number
    let showedCardFloor: number = 1

    const onTouchStart = (e: TouchEvent) => {
      startPoint = e.touches[0].screenX
    }
    const onTouchFinish = (e: TouchEvent) => {
      const $topCard =
        cardStackRef.current?.children[
          cardStackRef.current?.childElementCount - showedCardFloor
        ]
      const $prevTopCard =
        cardStackRef.current?.children[
          cardStackRef.current?.childElementCount - (showedCardFloor - 1)
        ]
      if (!$topCard) return
      lastPoint = e.changedTouches[0].screenX
      const deltaX = startPoint - lastPoint
      if (deltaX > 50) {
        if (showedCardFloor < props.elements.length) {
          showedCardFloor++

          $topCard.setAttribute(
            'style',
            'transform: translate3d(-1200px, 0, 0)'
          )
        }
      } else if (deltaX < 0) {
        if (deltaX < -50) {
          $prevTopCard?.removeAttribute('style')
          if (showedCardFloor > 1) {
            showedCardFloor--
          }
        } else {
          $prevTopCard?.setAttribute(
            'style',
            'transform: translate3d(-1200px, 0, 0)'
          )
        }
      } else {
        $topCard.removeAttribute('style')
      }

      const rootIdx = updateRootCardIdx($)
      dispatchCardStack(rootIdx || 2)
    }
    const onTouchMove = (e: TouchEvent) => {
      const $topCard =
        cardStackRef.current?.children[
          cardStackRef.current?.childElementCount - showedCardFloor
        ]
      const $prevTopCard =
        cardStackRef.current?.children[
          cardStackRef.current?.childElementCount - (showedCardFloor - 1)
        ]
      if (!$topCard) return
      const currentPoint = e.touches[0].screenX
      const deltaX = startPoint - currentPoint

      if (deltaX < 0) {
        $prevTopCard?.setAttribute(
          'style',
          `position: absolute; left: ${-1 * (140 + deltaX)}px`
        )
      } else {
        if (showedCardFloor === props.elements.length) return
        $topCard.setAttribute(
          'style',
          `transform: translate3d(${-1 * deltaX}px, 0, 0); z-index: 2`
        )
      }
    }

    $.addEventListener('touchstart', onTouchStart)
    $.addEventListener('touchend', onTouchFinish)
    $.addEventListener('touchmove', onTouchMove)

    return () => {
      $.removeEventListener('touchstart', onTouchStart)
      $.removeEventListener('touchend', onTouchFinish)
      $.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <Container ref={cardStackRef}>
      {props.elements?.map((Card, idx) => (
        <CardManager floor={idx} key={cardKey.current++}>
          {Card}
        </CardManager>
      ))}
    </Container>
  )
}

export default React.memo(CSComponent)

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
