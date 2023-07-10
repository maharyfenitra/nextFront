import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { InputAdornment, ListItemIcon, ListItemText } from "@mui/material";
import { useCurrencies } from "../hooks/useCurrencies";
import Image from "next/image";

export default function SelectTextFieldFrom(props: TextFileldPropType) {
  const { currencies } = useCurrencies();
  const [currency, setCurrency] = React.useState(currencies[0].value);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <Stack
          direction="row"
          spacing={0}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <TextField
            id="outlined-select-currency"
            select
            label={props.label}
            value={props.currency}
            onChange={props.handleCurrenciesChange}
            size="small"
          >
            {props.currencies.map((option, index) => (
              <MenuItem key={index} value={option.value as string}> 
                <Image src={require("./"+option.icon)} alt="MGT" width={28} height={20} className="currencyIcon" />
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-basic"
            label={!props.isBalanceLoading ? `Sold ${props.sold}` : "Loading..."}
            variant="outlined"
            value={props.amount}
            onChange={props.handleFieldChange}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
}

type TextFileldPropType = {
  label: String;
  currency: String;
  currencies: {
    label: String,
    value: String, 
    icon: String
  }[];
  amount: number;
  sold: number;
  isBalanceLoading: boolean;
  handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  handleCurrenciesChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
};
