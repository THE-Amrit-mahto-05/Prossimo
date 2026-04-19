import { ResearchPaper } from '../ResearchPaper';

export interface IScoringStrategy {
    calculateScore(paper: ResearchPaper): number;
}

export class StandardScoringStrategy implements IScoringStrategy {
    public calculateScore(paper: ResearchPaper): number {
        return 10;
    }
}

export class AdvancedScoringStrategy implements IScoringStrategy {
    public calculateScore(paper: ResearchPaper): number {
        return 50;
    }
}

export class ScoreCalculator {
    private strategy: IScoringStrategy;

    constructor(strategy: IScoringStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: IScoringStrategy): void {
        this.strategy = strategy;
    }

    public calculate(paper: ResearchPaper): number {
        return this.strategy.calculateScore(paper);
    }
}
