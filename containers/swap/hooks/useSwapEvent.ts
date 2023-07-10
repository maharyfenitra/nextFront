import { MouseEventHandler, useState } from "react";
import TransactionService from "../../../services/transactionService";
import { useCurrencies } from "./useCurrencies";

const useSwapEvent = () => {
    const { currencies } = useCurrencies();
    const transactionService = new TransactionService();

    const [params, setParams] = useState({
        amountFrom: 0,
        fromCurrency: "",
        isBalanceFromLoading: false,
        soldFrom: 0,
        amountTo: 0,
        toCurrency: "",
        isBalanceToLoading: false,
        soldTo: 0,
        isSwapLoading: false,
    });

    const updateBalance = async () => {
        setParams({
            ...params,
            isBalanceFromLoading: true,
            isBalanceToLoading: true,
        });

        const { sold: sold1 } = await transactionService.getTokenBalance(
            params.fromCurrency
        );

        const { sold: sold2 } = await transactionService.getTokenBalance(
            params.toCurrency
        );
        setParams({
            ...params,
            soldFrom: sold1,
            soldTo: sold2,
            isBalanceFromLoading: false,
            isBalanceToLoading: false,
        });
    };

    const handleFieldChangeFrom = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = parseFloat(event.target.value) | 0;
        setParams({ ...params, amountFrom: newValue, amountTo: newValue });
    };

    const handleCurrenciesChangeFrom = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setParams({
            ...params,
            fromCurrency: event.target.value,
            isBalanceFromLoading: true,
        });
        const { sold } = await transactionService.getTokenBalance(
            event.target.value
        );

        setParams({
            ...params,
            fromCurrency: event.target.value,
            soldFrom: sold,
            isBalanceFromLoading: false,
        });
    };

    const handleFieldChangeTo = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setParams({ ...params, amountTo: parseFloat(event.target.value) | 0 });
    };

    const handleCurrenciesChangeTo = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setParams({
            ...params,
            toCurrency: event.target.value,
            isBalanceToLoading: true,
        });

        const { sold } = await transactionService.getTokenBalance(
            event.target.value
        );
        setParams({
            ...params,
            toCurrency: event.target.value,
            soldTo: sold,
            isBalanceToLoading: false,
        });
    };

    const handleSwapVerticalClick = async () => {
        const fromCurrency = params.fromCurrency;
        setParams({
            ...params,
            fromCurrency: params.toCurrency,
            toCurrency: fromCurrency,
        });
    };

    const handleSwapClick = async (event: any) => {
        setParams({ ...params, isSwapLoading: true });
        const { signature1, signature2 } = await transactionService.swaToken(
            params.toCurrency,
            params.fromCurrency,
            params.amountTo
        );

        await updateBalance();
        setParams({ ...params, isSwapLoading: false });
    };

    const currencyTo = () => {
        if (params.fromCurrency === "ariary")
            return currencies.filter((currency) => currency.label === "FOSA");

        return currencies.filter((currency) => {
            return currency.value !== params.fromCurrency;
        });
    };

    return {
        ...params,
        handleCurrenciesChangeFrom,
        handleFieldChangeFrom,
        handleFieldChangeTo,
        handleCurrenciesChangeTo,
        handleSwapVerticalClick,
        handleSwapClick,
        currencies,
        currenciesTo: currencyTo(),
    };
};

export { useSwapEvent };
