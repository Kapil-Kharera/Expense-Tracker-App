import "./ExpenseDate.css";

const ExpenseDate = ({ expense }) => {
    const formatMonth = expense.date.toLocaleString('en-US', { month: "long" });
    const formatDay = expense.date.toLocaleString('en-US', { month: "2-digit" });
    const year = expense.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{formatMonth}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{formatDay}</div>
        </div>
    )
}

export default ExpenseDate;