import { useGameStore } from "../../../store/gameStore"
import { LifeBar, LifeContainer } from "./Life.styles"
export const Life = () => {
    const {incorrectAttempts} = useGameStore()
    const lifePercent = 100 - (incorrectAttempts * 100 / 6)
  return (
    <LifeContainer>
        <LifeBar $lifePercent={lifePercent} />
    </LifeContainer>
  )
}
