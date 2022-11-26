import { storage, Context } from "near-sdk-as";

// must be export, or the blockchain can not access the contract
export class Greeting {
    getGreeting(accountID: string): string | null {
        return storage.get<string>(accountID, "Greeting not available");
    }

    setGreeting(greeting: string): void {
        storage.set(Context.sender, greeting);
    }
}