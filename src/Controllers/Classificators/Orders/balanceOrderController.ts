


///// EXPENSE **delete**
//export const deleteExpense = async (id: number) =>{

  //const expense = await ExpenseModel.findOne({where: {id: id}});

  //const balanceExpense = expense?.balanceId

  //const balanceToUpdate = await BalanceModel.findOne({where: { id: balanceExpense}})
  //--->const accountToUpdate = await AccounteModel.findOne({where: { userid: balanceExpense}})

  // const amountExpense = expense?.amount

  // await ExpenseModel.update({deletedExpense: true}, {where: {id: id}});

  // const total = balanceToUpdate?.total

  // if(total && amountExpense){
  // const newTotal = total + amountExpense
  // await BalanceModel.update({ total: newTotal }, { where: { id: balanceExpense } });
  // }

    // const totalAccount= accountToUpdate?.total
    // if(totalAccount && amountExpense){
    // const newTotal = total + amountExpense
    // await AccountModel.update({amount: newTotal},{where: { userId: balanceExpense, name: expense?.paymentMethod}})
    // }

  //posibles return
    // const finish= await BalanceModel.findOne({where: { id: balanceExpense}, include: [accountModel]})//ver como incluirle el modelo de expense tamb
    // const finish= await AccountModel.findOne({where: { userId: balanceExpense}, include: [ExpenseModel]]})
    
    //return finish;
//};

///// INCOME **delete**
// export const deleteIncome = async (id: number) =>{

//   const income = await IncomeModel.findOne({where: {id: id}});

//   const balanceIncome = income?.balanceId

//   const balanceToUpdate = await BalanceModel.findOne({where: { id: balanceIncome}})
  //--->const accountToUpdate = await AccounteModel.findOne({where: { userid: balanceIncome}})

  // const amountIncome = income?.amount

  // await IncomeModel.update({deletedIncome: true}, {where: {id: id}});

  // const total = balanceToUpdate?.total

  // if(total && amountIncome){
  //     const newTotal = total - amountIncome
  //     await BalanceModel.update({ total: newTotal }, { where: { id: balanceIncome } });
  // }

  //const totalIncome= accountToUpdate?.total
  // if(totalIncome && amountIncome){
    // const newTotal = total - amountIncome
    // await AccountModel.update({amount: newTotal},{where: { userId: balanceIncome, name: income?.account}})
    // }

  //posibles return
    // const finish= await BalanceModel.findOne({where: { id: balanceIncome}, include: [accountModel]})//ver como incluirle el modelo de expense tamb
    // const finish= await AccountModel.findOne({where: { userId: balanceIncome}, include: [IncomeModel]]})
    
    //return finish;
//};

/////EXPENSE RETURN EL DELETE
//export const returnExpense = async (id: number) =>{

  //const expense = await ExpenseModel.findOne({where: {id: id}});

  //const balanceExpense = expense?.balanceId

  //const balanceToUpdate = await BalanceModel.findOne({where: { id: balanceExpense}})
  //--->const accountToUpdate = await AccounteModel.findOne({where: { userid: balanceExpense}})

  // const amountExpense = expense?.amount

  // await ExpenseModel.update({deletedExpense: false}, {where: {id: id}});

  // const total = balanceToUpdate?.total

  // if(total && amountExpense){
  // const newTotal = total - amountExpense
  // await BalanceModel.update({ total: newTotal }, { where: { id: balanceExpense } });
  // }

    // if(total && amountExpense){
    // const newTotal = total - amountExpense
    // await AccountModel.update({amount: newTotal},{where: { userId: balanceExpense, name: expense?.paymentMethod}})
    // }

  //posibles return
    // const finish= await BalanceModel.findOne({where: { id: balanceExpense}, include: [accountModel]})//ver como incluirle el modelo de expense tamb
    // const finish= await AccountModel.findOne({where: { userId: balanceExpense}, include: [ExpenseModel]]})
    
    //return finish;
//};


////// INCOME RETURN DELETE
// export const deleteIncome = async (id: number) =>{

//   const income = await IncomeModel.findOne({where: {id: id}});

//   const balanceIncome = income?.balanceId

//   const balanceToUpdate = await BalanceModel.findOne({where: { id: balanceIncome}})
  //--->const accountToUpdate = await AccounteModel.findOne({where: { userid: balanceIncome}})

  // const amountIncome = income?.amount

  // await IncomeModel.update({deletedIncome: false}, {where: {id: id}});

  // const total = balanceToUpdate?.total

  // if(total && amountIncome){
  //     const newTotal = total + amountIncome
  //     await BalanceModel.update({ total: newTotal }, { where: { id: balanceIncome } });
  // }

  //const totalIncome= accountToUpdate?.total
  // if(totalIncome && amountIncome){
    // const newTotal = total + amountIncome
    // await AccountModel.update({amount: newTotal},{where: { userId: balanceIncome, name: income?.account}})
    // }

  //posibles return
    // const finish= await BalanceModel.findOne({where: { id: balanceIncome}, include: [accountModel]})//ver como incluirle el modelo de expense tamb
    // const finish= await AccountModel.findOne({where: { userId: balanceIncome}, include: [IncomeModel]]})
    
    //return finish;
//};

