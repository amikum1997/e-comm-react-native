import React, { useEffect, useState } from 'react'

interface environemt {
url : string
}

function Environment() {

  const [environment, setEnvironment] = useState<environemt>({
    url : ''
  })

  const developmentEnvironment = {
    url: ''
  }

  const productionEnvironment = {
    url: ''
  }

  useEffect(() => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0. 0.1') {
      setEnvironment(developmentEnvironment)
    } else {
      setEnvironment(productionEnvironment)
    }
  }, [])
  return { environment }
}

export default Environment