import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Alert,
  CircularProgress,
  Chip,
  Divider,
  Grid
} from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { mpesaParser } from '../../utils/mpesaParser';
import { useAuth } from '../../contexts/AuthContext';
import MessageDisplay from '../../components/MessageDisplay';

export default function ValidatePayments() {
  const [paymentCode, setPaymentCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [validationResult, setValidationResult] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleValidate = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    setValidationResult(null);

    try {
      const parsed = mpesaParser.parseMessage(paymentCode);
      if (parsed && parsed.isValid) {
        const validationResult = mpesaParser.validateFinTechPayment(paymentCode);
        setValidationResult({
          transactionId: parsed.transactionId,
          amount: parsed.amount,
          phoneNumber: 'N/A', // Not available from message
          status: validationResult.isValid ? 'VALIDATED' : 'FAILED',
          timestamp: new Date().toISOString()
        });
        setSuccess(validationResult.isValid ? 'Payment validated successfully!' : validationResult.error);
        if (!validationResult.isValid) {
          setError(validationResult.error);
        }
      } else {
        setError('Invalid M-Pesa message format');
      }
    } catch (err) {
      setError(err.message || 'Failed to validate payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      {/* Header with title and message display */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        p: 3,
        maxWidth: 1200,
        mx: 'auto'
      }}>
        <Typography level="h2" sx={{ flex: 1 }}>
          Validate M-Pesa Payment
        </Typography>
        
        <MessageDisplay />
      </Box>
      
      <Box sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 2 }}>
        <Card>
          <CardContent>
            <Typography level="h4" sx={{ mb: 2 }}>
              Enter Payment Code
            </Typography>
            
            <TextField
              fullWidth
              placeholder="Enter your M-Pesa payment code"
              value={paymentCode}
              onChange={(e) => setPaymentCode(e.target.value)}
              sx={{ mb: 2 }}
            />
            
            <Button
              fullWidth
              onClick={handleValidate}
              loading={loading}
              disabled={!paymentCode.trim()}
              sx={{ mb: 2 }}
            >
              Validate Payment
            </Button>
            
            {error && (
              <Alert color="danger" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            
            {success && (
              <Alert color="success" sx={{ mb: 2 }}>
                {success}
              </Alert>
            )}
            
            {validationResult && (
              <Box sx={{ mt: 2 }}>
                <Typography level="h5" sx={{ mb: 2 }}>
                  Validation Result
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}>
                    <Typography level="body-sm">
                      <strong>Transaction ID:</strong> {validationResult.transactionId}
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <Typography level="body-sm">
                      <strong>Amount:</strong> Ksh {validationResult.amount}
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <Typography level="body-sm">
                      <strong>Status:</strong> 
                      <Chip 
                        color={validationResult.status === 'VALIDATED' ? 'success' : 'danger'} 
                        size="sm" 
                        sx={{ ml: 1 }}
                      >
                        {validationResult.status}
                      </Chip>
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <Typography level="body-sm">
                      <strong>Date:</strong> {new Date(validationResult.timestamp).toLocaleString()}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
