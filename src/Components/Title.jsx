import React from 'react'

function Title({ t1, t2, p1 }) {
  return (
    <div className="text-center max-w-3xl mx-auto">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {t1}
        <span className="text-blue-400">{t2}</span>
      </h1>

      {/* Divider */}
      <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>

      {/* Description */}
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        {p1}
      </p>

    </div>
  )
}

export default Title
