import * as React from 'react'

const SvgArrowLeft24 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 4.293a1 1 0 010 1.414L7.414 11H19a1 1 0 110 2H7.414l5.293 5.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgArrowLeft24
