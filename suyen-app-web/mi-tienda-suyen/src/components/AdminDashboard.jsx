// src/components/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardActionArea, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import './styles.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard-background">
      <Container maxWidth="lg" sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: '#ffffff' }}>
          Panel de Administración
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea component={Link} to="/admin/add-product">
                <CardMedia className="card-media">
                  <AddIcon sx={{ fontSize: 60, color: '#007bff' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="h2" align="center">
                    Agregar Producto
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea component={Link} to="/admin/edit-product">
                <CardMedia className="card-media">
                  <EditIcon sx={{ fontSize: 60, color: '#007bff' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="h2" align="center">
                    Modificar Producto
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea component={Link} to="/admin/delete-product">
                <CardMedia className="card-media">
                  <DeleteIcon sx={{ fontSize: 60, color: '#007bff' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="h2" align="center">
                    Eliminar Producto
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea component={Link} to="/admin/manage-users">
                <CardMedia className="card-media">
                  <ManageAccountsIcon sx={{ fontSize: 60, color: '#007bff' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="h2" align="center">
                    Administrar Usuarios
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AdminDashboard;
