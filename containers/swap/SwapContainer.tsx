import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SelectTextFieldFrom from "./components/SelectTextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSwapEvent } from "./hooks/useSwapEvent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Convert from "../../public/convert.png";

export default function SwapContainer() {
    const {
        amountFrom,
        fromCurrency,
        isBalanceFromLoading,
        soldFrom,
        amountTo,
        toCurrency,
        soldTo,
        isBalanceToLoading,
        isSwapLoading,
        handleCurrenciesChangeFrom,
        handleFieldChangeFrom,
        handleFieldChangeTo,
        handleCurrenciesChangeTo,
        handleSwapVerticalClick,
        handleSwapClick,
        currencies,
        currenciesTo,
    } = useSwapEvent();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Box className="swap card">
                    <SelectTextFieldFrom
                        label={"From"}
                        currency={fromCurrency}
                        amount={amountFrom}
                        sold={soldFrom}
                        currencies={currencies}
                        handleFieldChange={handleFieldChangeFrom}
                        handleCurrenciesChange={handleCurrenciesChangeFrom}
                        isBalanceLoading={isBalanceFromLoading}
                    />
                    <Box className="convert">
                        <Image
                            src={Convert}
                            alt="convert"
                            width={45}
                            height={45}
                            onClick={handleSwapVerticalClick}
                            className="btnConvert"
                        />
                    </Box>

                    <SelectTextFieldFrom
                        label={"To"}
                        currency={toCurrency}
                        amount={amountTo}
                        sold={soldTo}
                        currencies={currenciesTo}
                        handleFieldChange={handleFieldChangeTo}
                        handleCurrenciesChange={handleCurrenciesChangeTo}
                        isBalanceLoading={isBalanceToLoading}
                    />
                    <Grid container spacing={2} className="blocTotal">
                        <Grid item xs={6} sm={6}>
                            Transaction cost
                        </Grid>
                        <Grid item xs={6} sm={6} className="right">
                            5 MGT
                        </Grid>
                        <Grid item xs={6} sm={6} className="total mt">
                            Total
                        </Grid>
                        <Grid item xs={6} sm={6} className="right mt">
                            <strong>2$</strong> 200 MGT
                        </Grid>
                    </Grid>

                    <LoadingButton
                        loading={isSwapLoading}
                        variant="contained"
                        sx={{ width: "100%" }}
                        onClick={handleSwapClick}
                        className="btn"
                    >
                        {!isSwapLoading ? "Swap Now" : "Loading..."}
                    </LoadingButton>
                </Box>
            </Container>
        </React.Fragment>
    );
}
