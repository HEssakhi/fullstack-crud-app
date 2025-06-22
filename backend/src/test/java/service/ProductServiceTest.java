package service;


import com.example.model.Product;
import com.example.repository.ProductRepository;
import com.example.service.ProductService;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
public class ProductServiceTest {
    private ProductRepository repo;
    private ProductService service;

    @BeforeEach
    public void setup() {
        repo = mock(ProductRepository.class);
        service = new ProductService(repo);
    }

    @Test
    public void testGetAll() {
        List<Product> mockProducts = Arrays.asList(
                new Product(1L, "Phone", 999.0, "Smartphone"),
                new Product(2L, "Laptop", 1999.0, "Powerful laptop")
        );

        when(repo.findAll()).thenReturn(mockProducts);

        List<Product> result = service.getAll();

        assertEquals(2, result.size());
        verify(repo).findAll();
    }

    @Test
    public void testGetById_found() {
        Product p = new Product(1L, "Mouse", 15.0, "Wireless");
        when(repo.findById(1L)).thenReturn(Optional.of(p));

        Product result = service.getById(1L);

        assertEquals("Mouse", result.getName());
    }

    @Test
    public void testGetById_notFound() {
        when(repo.findById(99L)).thenReturn(Optional.empty());

        assertThrows(EntityNotFoundException.class, () -> service.getById(99L));
    }

    @Test
    public void testCreate() {
        Product p = new Product(null, "Monitor", 150.0, "24 inch");
        Product saved = new Product(1L, "Monitor", 150.0, "24 inch");

        when(repo.save(p)).thenReturn(saved);

        Product result = service.create(p);

        assertEquals(1L, result.getId());
        verify(repo).save(p);
    }

    @Test
    public void testDelete_found() {
        when(repo.existsById(1L)).thenReturn(true);

        service.delete(1L);

        verify(repo).deleteById(1L);
    }

    @Test
    public void testDelete_notFound() {
        when(repo.existsById(90L)).thenReturn(false);

        assertThrows(EntityNotFoundException.class, () -> service.delete(90L));
    }
}
