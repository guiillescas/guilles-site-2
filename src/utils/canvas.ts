export function renderCanvasStars(canvasRef: HTMLCanvasElement | null) {
  if (canvasRef) {
    const canvas = canvasRef.getContext('2d')

    let canvasWidth: number
    let canvasHeight: number

    const setCanvasExtents = () => {
      canvasWidth = document.body.clientWidth
      canvasHeight = self.innerHeight
      canvasRef.width = canvasWidth
      canvasRef.height = canvasHeight
    }

    setCanvasExtents()

    window.onresize = () => {
      setCanvasExtents()
    }

    const makeStars = (numberOfStars: number) => {
      const allStars = []

      for (let i = 0; i < numberOfStars; i++) {
        const starPosition = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000
        }

        allStars.push(starPosition)
      }

      return allStars
    }

    const stars = makeStars(5000)

    const clear = () => {
      if (canvas) {
        canvas.fillStyle = '#171717'
        canvas.fillRect(0, 0, canvasRef.width, canvasRef.height)
      }
    }

    const putPixel = (x: number, y: number, brightness: number) => {
      if (canvas) {
        const intensity = brightness * 255
        const rgb = 'rgb(' + intensity + ',' + intensity + ',' + intensity + ')'
        canvas.fillStyle = rgb
        canvas.fillRect(x, y, 1, 2)
      }
    }

    const moveStars = (distance: number) => {
      const totalStars = stars.length

      for (let i = 0; i < totalStars; i++) {
        const s = stars[i]

        s.z -= distance

        while (s.z <= 1) {
          s.z += 1000
        }
      }
    }

    let prevTime: number

    const init = (time: number) => {
      prevTime = time
      requestAnimationFrame(tick)
    }

    const tick = (time: number) => {
      const elapsed = time - prevTime
      prevTime = time

      moveStars(elapsed * 0.02)

      clear()

      const cx = canvasWidth / 2
      const cy = canvasHeight / 2

      const count = stars.length

      for (let i = 0; i < count; i++) {
        const star = stars[i]

        const x = cx + star.x / (star.z * 0.001)
        const y = cy + star.y / (star.z * 0.001)

        if (x < 0 || x >= canvasWidth || y < 0 || y >= canvasHeight) {
          continue
        }

        const d = star.z / 1000
        const b = 1 - d * d

        putPixel(x, y, b)
      }

      requestAnimationFrame(tick)
    }

    requestAnimationFrame(init)
  }
}
