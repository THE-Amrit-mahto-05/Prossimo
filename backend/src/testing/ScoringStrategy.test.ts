import { ScoreCalculator, StandardScoringStrategy, AdvancedScoringStrategy } from '../domain/strategies/ScoringStrategy';
import { ResearchPaper } from '../domain/ResearchPaper';
import { Industry } from '../domain/Industry';

console.log("Strategy Pattern Test");
const industry = new Industry("1", "Tech", "Desc");
const paper = new ResearchPaper("p1", "Test Title", 2024, industry);

const calculator = new ScoreCalculator(new StandardScoringStrategy());
if (calculator.calculate(paper) === 10) {
    console.log("Standard Strategy Test Passed.");
} else {
    console.error("Standard Strategy Test Failed.");
}

calculator.setStrategy(new AdvancedScoringStrategy());
if (calculator.calculate(paper) === 50) {
    console.log("Advanced Strategy Test Passed.");
} else {
    console.error("Advanced Strategy Test Failed.");
}
