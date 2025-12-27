import { Grid } from "@mui/material"
import GreetingCard from "./GreetingCard"
import type { OverviewCardProps } from "./type"
import BalanceCard from "./BalanceCard"

const OverviewCard = ({ imageUrl, balance, handleShowBalance, showBalance }: OverviewCardProps) => {
    return (
        <>
            <Grid container size={{ sm: 12, md: 5 }} spacing={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <GreetingCard imageUrl={imageUrl} />
            </Grid>
            <Grid container size={{ sm: 12, md: 7 }}>
                <BalanceCard balance={balance} handleShowBalance={handleShowBalance} showBalance={showBalance} />
            </Grid>
        </>
    )
}

export default OverviewCard