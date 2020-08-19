import * as React from 'react'

function SvgPeople24(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4a3 3 0 100 6 3 3 0 000-6zM3 7a5 5 0 1110 0A5 5 0 013 7zM14 6a1 1 0 011-1 4 4 0 011.333 7.772 1 1 0 11-.666-1.886A2.001 2.001 0 0015 7a1 1 0 01-1-1zM2 20.001A1 1 0 010 20v-.036l.002-.07c.003-.058.007-.137.015-.235a7.638 7.638 0 01.994-3.163C2.067 14.686 4.148 13 8 13s5.933 1.686 6.989 3.496a7.636 7.636 0 011.01 3.468v.022l.001.008V20a1 1 0 01-2 .004v-.002l-.001-.03a5.37 5.37 0 00-.09-.718 5.639 5.639 0 00-.648-1.75C12.567 16.314 11.148 15 8 15s-4.567 1.314-5.261 2.504A5.639 5.639 0 002 20zM16.006 14.895a1 1 0 011.099-.89c2.856.302 4.386 1.77 5.154 3.226a6.604 6.604 0 01.728 2.497 4.354 4.354 0 01.013.241V20a1 1 0 01-2 .005l-.062-3.153m0 0L21 20.005v-.018l-.007-.101a4.6 4.6 0 00-.503-1.721c-.48-.912-1.451-1.944-3.595-2.17a1 1 0 01-.89-1.1"
      />
    </svg>
  )
}

export default SvgPeople24
