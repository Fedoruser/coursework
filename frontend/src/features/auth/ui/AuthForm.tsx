import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import './styleform.css';

const authSchema = (type: 'login' | 'registration') =>
  z.object({
      username: z.string().min(3, 'Имя пользователя должно быть не менее 3 символов'),
      password: z.string().min(6, 'Пароль должен быть не менее 6 символов'),
      confirmPassword:
        type === 'registration'
        ? z.string().min(6, 'Пароль должен быть не менее 6 символов')
  : z.literal('').optional(),
      remember: z.boolean().optional(),
    })
    .refine((data) => data.password === data.confirmPassword || type === 'login', {
      message: 'Пароли не совпадают',
      path: ['confirmPassword'],
    });

type AuthFormData = z.infer<ReturnType<typeof authSchema>>;

type AuthFormProps = {
  type: 'login' | 'registration';
};

 export const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema(type)),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: type === 'registration' ? '' : undefined, 
      remember: false,
    },
  });

  const onSubmit = (data: AuthFormData) => {
    console.log('Форма успешно отправлена:', data);
    navigate('/dashboard'); 
  };

  return (
    <div className="auth-container">
      <div className="auth-overlay"></div>
      <div className="auth-form-container">
        <h2 className="auth-title" style={{marginBottom:'20px'}} >{type === 'login' ? 'Вход в систему' : 'Регистрация'} </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Item
            labelCol={{span:24}}
            label={<span style={{ color: '#fff' }}>Имя пользователя</span>}
            validateStatus={errors.username ? 'error' : undefined}
            help={errors.username?.message}
          >
            <Controller
              name="username"
              control={control}
              render={({ field }) => <Input {...field} />}
              
            />
          </Form.Item>

          <Form.Item
            labelCol={{span:24}}

            label={<span style={{ color: '#fff' }}>Пароль</span>}
            validateStatus={errors.password ? 'error' : ''}
            help={errors.password?.message}
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => <Input.Password {...field} />}
            />
          </Form.Item>

          {type === 'registration' && (
            <Form.Item
            labelCol={{span:24}}

            label={<span style={{ color: '#fff' }}>Подтвердите пароль</span>}
              validateStatus={errors.confirmPassword ? 'error' : ''}
              help={errors.confirmPassword?.message}
            >
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => <Input.Password {...field} />}
              />
            </Form.Item>
          )}

          {type === 'login' && (
            <Form.Item>
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <Checkbox 
                   style={{color:'#fff',display:'flex',justifyContent:'flex-start'}} {...field} checked={field.value}>
                    Запомнить меня
                  </Checkbox>
                )}
              />
            </Form.Item>
          )}

          <Form.Item>
            <Button  type="primary" htmlType="submit" block>
              {type === 'login' ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </Form.Item>
        </form>

        <p className="auth-switch">
          {type === 'login' ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
          <Link className='linkdir' to={type === 'login' ? '/registration' : '/login'}>
            {type === 'login' ? 'Зарегистрироваться' : 'Войти'}
          </Link>
        </p>
      </div>
    </div>
  );
};

