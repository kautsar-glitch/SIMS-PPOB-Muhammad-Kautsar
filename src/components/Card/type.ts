export interface BalanceCardProps {
    balance?: number;
    showBalance?: boolean;
    handleShowBalance?: () => void;
}

export interface GreetingCardProps {
    imageUrl?: string;
}

export interface OverviewCardProps extends BalanceCardProps, GreetingCardProps {
    
}