class AssertionError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'AssertionError';
    }
}

class BankAccount {
    private _balance: number;
    private _numberAccount: string;

    constructor(initialBalance: number, accountNumber: string) {
        // Invariante
        if (initialBalance < 0) {
            throw new AssertionError('Initial balance must be positive');
        }
        this._balance = initialBalance;
        this._numberAccount = accountNumber;
    }

    createAccount(numberAccount: string) {
        if (numberAccount.length > 16 && numberAccount.length > 17) {
            throw new AssertionError('The acount cant have more than 16 digits');
        }

        this._numberAccount = numberAccount;
        if(!this._numberAccount) {
            throw new AssertionError('The acount doesnt exits');
        }
    }

    update(updateBalance : number): void {
        if(updateBalance < 0) {
            throw new AssertionError('Balance should...')
        }

        this._balance = updateBalance;
        
    }

    deposit(amount: number): void {
        // Precondiciones
        if (amount <= 0) {
            throw new AssertionError('Deposit amount should be positive');
        }

        this._balance += amount;

        // Postcondicion
        if (this._balance < 0) {
            throw new AssertionError('Balance should not be negative after deposit');
        }
    }

    debit(amount: number): void {
        // Precondicion
        if (this._balance < amount) {
            throw new AssertionError('Insufficient balance');
        }

        this._balance -= amount;

        // Postcondicion
        if (this._balance < 0) {
            throw new AssertionError('Balance should not be negative after debit');
        }
    }

    get balance(): number {
        return this._balance;
    }

    get accountNumber(): string {
        return this._numberAccount;
    }

    closeAccount(): void {
        this._balance = 0;
        this._numberAccount = '';
    }

    withdraw(amount: number): void {

        // Precondición
        if (this._balance < amount) {
            throw new AssertionError('Insufficient balance');
        }

        this._balance -= amount;

        // Postcondición
        if (this._balance < 0) {
            throw new AssertionError('Balance should not be negative after withdraw');
        }
    }
    getAccountInfo(): string {
        return `Account Number: ${this._numberAccount}\nBalance: ${this._balance}`;
    }
}