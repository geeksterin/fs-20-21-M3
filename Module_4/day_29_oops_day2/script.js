class BankAccount {
  constructor() {
    this.type = "SAVINGS";
    this.balance = 10000;
    this.accHolderName = "ABCD";
    this.accNo = "12345";
    this.ifsc = "SBIN0001234";
    this.contactNo = "9876543210";
    this.debitCardNo = "4567-1236-7896-7854";
    this.cardPin = "1234";
  }

  getBalance() {
    return this.balance;
  }

  setBalance(newBalance) {
    this.balance = newBalance;
  }

  getContactNo() {
    return this.contactNo;
  }

  setContactNo(newContactNo) {
    this.contactNo = newContactNo;
  }

  validateDebitCardNo(cardNo) {
    // Validate the card from account
    return cardNo == this.debitCardNo;
  }

  validateDebitCardPin(pin) {
    return pin == this.cardPin;
  }

  isBalanceSufficient(balance) {
    return this.balance >= balance;
  }

  sendSMS() {
    // Todo: Send sms to registered contact no
  }

  dispenceMoney() {
    // Todo: Instruct the machine to dispence the money
  }

  printReceipt() {
    // Todo: Instruct the ATM to print the receipt
  }

  withdrawMoney(debitCardNo, debitCardPin, amountToWithdraw) {
    /**
     * 1. Swipe the card (Read the card no)
     * 2. Enter the PIN (Validate the PIN)
     * 3. Enter the amount to be withdrawn
     * 4. Check the availabe balance in account
     * 5. Money gets deducted from the account
     * 6. ATM Dispence the money
     * 7. Send the SMS Alert
     * 8. Print the receip / slip
     */
    const isCardValid = this.validateDebitCardNo(debitCardNo);
    if (!isCardValid) {
      return "INVALID CARD";
    }

    const isPinValid = this.validateDebitCardPin(debitCardPin);
    if (!isPinValid) {
      return "INVALID PIN";
    }

    const isBalanceSufficient = this.isBalanceSufficient(amountToWithdraw);
    if (!isBalanceSufficient) {
      return "INSUFFICIENT FUNDS";
    }

    this.dispenceMoney();

    const balance = this.getBalance();
    this.setBalance(balance - amountToWithdraw);

    this.sendSMS();
    this.printReceipt();

    return "MONEY WITHDRAWL SUCCESSFUL";
  }
}
