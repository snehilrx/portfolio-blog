import { useDebouncedState } from '@mantine/hooks'
import React, { CSSProperties, DOMAttributes, MouseEventHandler, useState } from 'react'

const MINIMUM_RIPPLE_SIZE = 100

interface RippleData {
  key: number,
  style: CSSProperties
}

export default function useRipple(style: CSSProperties) {
  const [ripples, setRipples] = useState<RippleData[]>([])
  const showRipple = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const { left, top } = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - left
    const y = event.clientY - top
    const rippleSize = Math.min(event.currentTarget.clientHeight, event.currentTarget.clientWidth, MINIMUM_RIPPLE_SIZE)

    const newRipple : RippleData = {
      key: event.timeStamp,
      style: {
        display: 'block',
        width: rippleSize,
        height: rippleSize,
        position: 'absolute',
        left: x - rippleSize / 2,
        top: y - rippleSize / 2,
        background: 'currentColor',
        borderRadius: '50%',
        opacity: 0.4,
        pointerEvents: 'none',
        animationName: 'useRippleAnimation',
        animationDuration: '0.8s',
        visibility: 'hidden',
        ...style
      }
    }
    setRipples([...ripples, newRipple])
  }

  const ripplesArray = ripples.map(currentRipple => {
    const handleAnimationEnd = () => {
      const newRipple = ripples.filter(previousRipple => previousRipple.key !== currentRipple.key)
      setRipples(newRipple)
    }

    return <span {...currentRipple} onAnimationEndCapture={handleAnimationEnd} />
  })

  return {
    addRipple: showRipple, ripples: ripplesArray
  }
}