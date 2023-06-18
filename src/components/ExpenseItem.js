import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenses }) => {
  console.log(expenses);

  return (
    <>
      {
        expenses.map((expense) => 
           (
            <div className="expense-item" key={expense.id}>
              <ExpenseDate expense={expense} />
              <div className="expense-item_description">
                <h2>{expense.title}</h2>
                <div className="expense-item_price">${expense.amount}</div>
              </div>
            </div>
          )
        )
      }
    </>
  )
}

export default ExpenseItem;